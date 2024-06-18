import ModeSelect from '~/components/ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as trelloIcon } from '~/assets/trello.svg'
import Typography from '@mui/material/Typography';

function AppBar() {
  return (
      <Box px={2} sx={{
        display: 'flex', alignItems: 'center', 
        width: '100%', height: (theme) => theme.Trello.appBarHeight,
        justifyContent: 'space-between'
      }}>

        <Box>
        <AppsIcon sx={{color: 'primary.main'}}></AppsIcon>
        <SvgIcon component={trelloIcon} inheritViewBox sx={{color: 'primary.main'}} />
        <Typography variant="span">Trello</Typography>
        </Box>

        <Box>
        <ModeSelect />

        </Box>
      </Box>
  )
}

export default AppBar
