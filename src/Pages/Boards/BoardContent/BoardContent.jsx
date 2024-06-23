import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/Utils/sorts'
import { DndContext } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useState, useEffect } from 'react'
import { MouseSensor, useSensor, useSensors, DragOverlay, defaultDropAnimationSideEffects, closestCorners } from '@dnd-kit/core'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'
import { cloneDeep } from 'lodash'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  // phải di chuyển 10px mới kéo đc, fix khi click chuột bị gọi event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } });

  const sensors = useSensors(mouseSensor)

  const [orderedColumns, setOrderedColumns] = useState([])
  //cùng 1 thời điểm chỉ có 1 phần tử đc kéo (Column or Card)
  const [activeDragItemId, setactiveDragItemId] = useState(null)
  const [activeDragItemType, setactiveDragItemType] = useState(null)
  const [activeDragItemData, setactiveDragItemData] = useState(null)
  // console.log('activeDragItemData', activeDragItemData);

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  // Tìm một cái Column theo CardId
  const findColumnByCardId = (cardId) => {
    // Đoạn này cần lưu ý, nên dùng c.cards thay vì c.cardOrderIds bởi vì ở bước handleDragover chúng ta sẽ 
    //Làm dữ liệu cho cards hoàn chỉnh trước rồi mới tạo ra cardOrderIds mới.
    return orderedColumns.find(column => column?.cards?.map(card => card._id)?.includes(cardId))
  }

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

  //trigger trong quá trình kéo 1 phần tử
  const handleDragOver = (e) => {
    // console.log("handleDragOver:", e)

    // không lmj nếu kéo column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

    //còn kéo card thì xử lý kéo qua lại các columns
    const { active, over } = e

    //kiểm tra nếu hk tồn tại over hoặc active(kéo linh tinh ra ngoài thì return luôn, tránh lỗi)
    if (!active || !over) return

    const { id: activeDraggingCardId, data: { current: activeDraggingCardData } } = active
    const { id: overCardId } = over

    //tìm 2 columns theo CardId
    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)
    console.log(activeColumn);
    console.log(overColumn);

    //kiểm tra nếu hk tồn tại 1 trong 2 columns thì hk lmj hết
    if (!activeColumn || !overColumn) return

    // Xử lý logic ở đây chỉ khi kéo card qua 2 column khác nhau, còn nếu kéo card trong chính 
    // column ban đầu của nó thì không làm gì
    // Vì đây đang là đoạn xử lý lúc kéo (handleDragover), còn xử lý lúc kéo xong xuôi thì nó lại 
    // là vấn đề khác ở(handleDragEnd) 
    if (activeColumn._id !== overColumn._id) {
      console.warn("code chạy");
      setOrderedColumns(prevColumns => {
        // Tìm vị trí (index) của cái overCard trong column đích (nơi mà activeCard sắp được thả)
        const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)
        // Logic tính toán "cardIndex mới" (trên hoặc dưới của overCard) lấy chuẩn ra từ code của thư viện -
        // nhiều khi muốn từ chối hiểu =))
        let newCardIndex
        const isBelowOverItem = active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height
        const modifier = isBelowOverItem ? 1 : 0
        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

        // Clone mảng OrderedColumnsState cũ ra một cái mới để xử lý data rồi return - cập nhật lại
        // OrderedColumnsState mới
        const nextColumns = cloneDeep(prevColumns)
        const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
        const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

        // Column cũ
        if (nextActiveColumn) {
          // Xóa card ở cái column active(cũng có thể hiểu là column cũ, cái lúc mà kéo card ra khỏi nó để sang
          // column khác)
          nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)

          // Cập nhật lại mảng cardOrderIds cho chuẩn dữ liệu
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
        }

        //Column mới
        if (nextOverColumn) {
          // Kiểm tra xem card đang kéo nó có tồn tại ở overColumn chưa, nếu có thì cần xóa nó trước
          nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)

          // Tiếp theo là thêm cái card đang kéo vào overColumn theo vị trí index mới
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData)

          // Cập nhật lại mảng cardOrderIds cho chuẩn dữ liệu
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
        }

        return nextColumns
      })
    }
  }

  //trigger khi kết thúc kéo 1 phần tử => hành động thả 
  const handleDragEnd = (e) => {
    // console.log("handleDragEnd:", e)
    const { active, over } = e

    //kiểm tra nếu hk tồn tại over hoặc active(kéo linh tinh ra ngoài thì return luôn, tránh lỗi)
    if (!active || !over) return

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
      //thuật toán phát hiện va chạm của dnd-kit(giúp kéo đc các card lớn)
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
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
            <Column column={activeDragItemData} />
          }
          {
            (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) &&
            <Card card={activeDragItemData} />
          }

        </DragOverlay>

      </Box>
    </DndContext>
  )
}

export default BoardContent
