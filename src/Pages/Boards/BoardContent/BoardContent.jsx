import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/Utils/sorts'
import { DndContext } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useState, useEffect } from 'react'
import { MouseSensor, useSensor, useSensors, DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  // phải di chuyển 10px mới kéo đc, fix khi click chuột bị gọi event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } });

  const sensors = useSensors(mouseSensor)

  // const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')

  const [orderedColumns, setOrderedColumns] = useState([])
  //cùng 1 thời điểm chỉ có 1 phần tử đc kéo (Column or Card)
  const [activeDragItemId, setactiveDragItemId] = useState(null)
  const [activeDragItemType, setactiveDragItemType] = useState(null)
  const [activeDragItemData, setactiveDragItemData] = useState(null)
  // console.log('activeDragItemData', activeDragItemData);

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  //trigger khi bắt đầu kéo 1 phần tử
  const handleDragStart = (e) => {
    // console.log("handleDragStart:", e)
    setactiveDragItemId(e?.active?.id)
    setactiveDragItemType(e?.active?.data?.current?.columnId
      ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setactiveDragItemData(e?.active?.data?.current)
  }

  //Animation khi thả (drop)
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5',
        },
      },
    }),
  };

  //trigger khi kết thúc kéo 1 phần tử => hành động thả 
  const handleDragEnd = (e) => {
    // console.log("handleDragEnd:", e)
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

    setactiveDragItemId(null)
    setactiveDragItemType(null)
    setactiveDragItemData(null)
  }


  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd} >
      <Box sx={{
        display: 'flex', p: '5px 0',
        width: '100%', backgroundColor: 'info.dark',
        height: (theme) => theme.Trello.boardContentHeight,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#273c75' : '#4b7bec')
      }}>

        <ListColumns columns={orderedColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {
            (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) &&
            <Column column={activeDragItemData}/>
          }
          {
            (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) &&
            <Card card={activeDragItemData}/>
          }

        </DragOverlay>

      </Box>
    </DndContext>
  )
}

export default BoardContent
