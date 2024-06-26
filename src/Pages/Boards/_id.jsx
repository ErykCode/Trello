import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
import { useEffect, useState } from 'react'
import { createCardAPI, createColumnAPI, fetchBoardDetailsAPI } from '~/apis'

function Board() {
  
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '66792606ab200742c94bf075'

    //call api
    fetchBoardDetailsAPI(boardId).then((board)=>{
      setBoard(board)
    })
  },[])

  // gọi API tạo ới column và lm mới lại state
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createColumnAPI({
      ...newColumnData,
      boardId: board._id
    });
    console.log("Created column", createdColumn);

    // update Board
    const newBoard = {...board}
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createdColumn._id)

    setBoard(newBoard)
  }

  // gọi API tạo mới card và lm mới lại state
  const createNewCard = async (newCardData) => {
    const createdCard = await createCardAPI({
      ...newCardData,
      boardId: board._id,
      // columnId: confirm
    });
    console.log("Created card", createdCard);

    // update Board
    const newBoard = {...board}
    const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.columnId);
    if (columnToUpdate) {
      columnToUpdate.cards.push(createdCard)
      columnToUpdate.cardOrderIds.push(createdCard._id)
    }

    setBoard(newBoard)
  }

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar></AppBar>
      <BoardBar board={board}></BoardBar>
      <BoardContent 
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
      ></BoardContent>
      
    </Container>
  )
}

export default Board
