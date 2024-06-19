import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={ {
      display: 'flex', alignItems: 'center', 
      width: '100%', backgroundColor: 'info.dark', 
      height: (theme) => `calc(100vh - ${theme.Trello.appBarHeight} - ${theme.Trello.boardBarHeight}) `,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#273c75' : '#4b7bec')
    } }>
    </Box>
  )
}

export default BoardContent
