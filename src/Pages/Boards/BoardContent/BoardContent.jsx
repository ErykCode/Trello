
import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/Utils/sorts'
import { DndContext } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useState, useEffect } from 'react'
import {MouseSensor, useSensor, useSensors} from '@dnd-kit/core';


function BoardContent({ board }) {
  // phải di chuyển 10px mới kéo đc, fix khi click chuột bị gọi event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10}});
  
  const sensors = useSensors(mouseSensor)

  // const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')

  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (e) => {
    console.log("handleDragEnd:", e)
    const { active, over } = e

    //kiểm tra nếu hk tồn tại over(kéo linh tinh ra ngoài thì return luôn, tránh lỗi)
    if (!over) return

    //Nếu vị trí sau khi khác vị trí ban đầu
    if (active.id !== over.id) {
      //lấy vị trí cũ (từ thằng active)
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id);
      //lấy vị trí mới (từ thằng over)
      const newIndex = orderedColumns.findIndex(c => c._id === over.id);
      //Dùng arrayMove của dndKit để sắp xếp lại mảng columns
      //https://github.com/clauderic/dnd-kit/blob/master/packages/sortable/src/utilities/arrayMove.ts
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      //2 cái console này dùng để sau này dùng để xử lý api
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      // console.warn("dndOrderedColumns:", dndOrderedColumns)
      // console.warn("dndOrderedColumnsIds:", dndOrderedColumnsIds)

      //cập nhật lại state columms ban đầu sau khi kéo thả
      setOrderedColumns(dndOrderedColumns)
    }
  }


  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box sx={{
        display: 'flex', p: '5px 0',
        width: '100%', backgroundColor: 'info.dark',
        height: (theme) => theme.Trello.boardContentHeight,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#273c75' : '#4b7bec')
      }}>

        <ListColumns columns={orderedColumns} />

      </Box>
    </DndContext>
  )
}

export default BoardContent
