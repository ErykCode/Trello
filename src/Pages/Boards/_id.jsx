import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
import { useEffect, useState } from 'react'
import { createCardAPI, createColumnAPI, fetchBoardDetailsAPI, updateBoardDetailsAPI } from '~/apis'
import { generatePlaceholderCard } from '~/Utils/formatters'
import { isEmpty } from 'lodash'

function Board() {

  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '667f0c78c79ff5b53cafb268'

    //call api
    fetchBoardDetailsAPI(boardId).then((board) => {
      board.columns.forEach(column => {
        // khi f5 web cần xử lý kéo thả column rỗng 
        if (isEmpty(column.cards)) {
          column.cards = [generatePlaceholderCard(column)]
          column.cardOrderIds = [generatePlaceholderCard(column)._id]
        }
      })
      setBoard(board)
    })
  }, [])

  // gọi API tạo ới column và lm mới lại state
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createColumnAPI({
      ...newColumnData,
      boardId: board._id
    });
    // console.log("Created column", createdColumn);

    // khi tạo column mới thì chx có card, cần xử lý kéo thả column rỗng 
    createdColumn.cards = [generatePlaceholderCard(createdColumn)]
    createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id]


    // update Board
    const newBoard = { ...board }
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createdColumn._id)

    setBoard(newBoard)
  }

  // gọi API tạo mới card và lm mới lại state
  const createNewCard = async (newCardData) => {
    const createdCard = await createCardAPI({
      ...newCardData,
      boardId: board._id,
    });
    console.log("Created card", createdCard);

    // update Board
    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.columnId);
    if (columnToUpdate) {
      columnToUpdate.cards.push(createdCard)
      columnToUpdate.cardOrderIds.push(createdCard._id)
    }

    setBoard(newBoard)
  }

  // Func gọi api và xử lý kéo thả column
  const moveColumns = async (dndOrderedColumns ) => {
    // update chuẩn dữ liệu 
    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    setBoard(newBoard)

    //gọi API update board
    await updateBoardDetailsAPI(newBoard._id, {columnOrderIds: dndOrderedColumnsIds})
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar></AppBar>
      <BoardBar board={board}></BoardBar>
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
        moveColumns={moveColumns}
      ></BoardContent>

    </Container>
  )
}

export default Board
