//Board deatail
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar></AppBar>
      <Box sx={ {
        display: 'flex', alignItems: 'center', width: '100%', backgroundColor: 'info.main', height: (theme) => theme.Trello.boardBarHeight
      } }>

      </Box>

      <Box sx={ {
        display: 'flex', alignItems: 'center', width: '100%', backgroundColor: 'info.dark', height: (theme) => `calc(100vh - ${theme.Trello.appBarHeight} - ${theme.Trello.boardBarHeight}) `
      } }>
      </Box>
    </Container>
  )
}

export default Board
