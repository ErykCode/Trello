import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={ {
      display: 'flex', alignItems: 'center', width: '100%', backgroundColor: 'info.dark', height: (theme) => `calc(100vh - ${theme.Trello.appBarHeight} - ${theme.Trello.boardBarHeight}) `
    } }>
    </Box>
  )
}

export default BoardContent
