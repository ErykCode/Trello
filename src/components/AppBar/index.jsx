import ModeSelect from '~/components/ModeSelect'
import Box from '@mui/material/Box'

function AppBar() {
  return (
      <Box sx={{
        display: 'flex', alignItems: 'center', width: '100%', backgroundColor: 'info.light', height: (theme) => theme.Trello.appBarHeight
      }}>
        <ModeSelect />
      </Box>
  )
}

export default AppBar
