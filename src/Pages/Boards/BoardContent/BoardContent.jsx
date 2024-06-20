
import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/Utils/sorts'

function BoardContent({board}) {

  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')

  return (
    <Box sx={{
      display: 'flex', p: '5px 0',
      width: '100%', backgroundColor: 'info.dark',
      height: (theme) => theme.Trello.boardContentHeight,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#273c75' : '#4b7bec')
    }}>

      <ListColumns columns={orderedColumns} />

    </Box>
  )
}

export default BoardContent
