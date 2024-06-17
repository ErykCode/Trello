import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={ {
      display: 'flex', alignItems: 'center', width: '100%', backgroundColor: 'info.main', height: (theme) => theme.Trello.boardBarHeight
    } }>

    </Box>
  )
}

export default BoardBar
