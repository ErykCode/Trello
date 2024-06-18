import ModeSelect from '~/components/ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as trelloIcon } from '~/assets/trello.svg'
import Typography from '@mui/material/Typography'
import WorkSpaces from './DropMenus/WorkSpaces'
import Starred from './DropMenus/Starred'
import Recent from './DropMenus/Recent'
import Templates from './DropMenus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './DropMenus/Profiles'

function AppBar() {
  return (
    <Box px={2} sx={{
      display: 'flex', alignItems: 'center',
      width: '100%', height: (theme) => theme.Trello.appBarHeight,
      justifyContent: 'space-between',
      gap: 2, overflowX: 'auto'
    }}>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }}></AppsIcon>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={trelloIcon} inheritViewBox fontSize='small' sx={{ color: 'primary.main' }} />
          <Typography variant="span" sx={{ fontWeight: 'bold', fontSize: '1.4rem', color: 'primary.main' }}>Trello</Typography>

          <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 1}}> 
            <WorkSpaces></WorkSpaces>
            <Recent></Recent>
            <Starred></Starred>
            <Templates></Templates>

            <Button variant="outlined">Create</Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-basic" size='small' label="Search...." type='search' variant="outlined" sx={{ minWidth: 120 }}/>
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge variant="dot" color="primary" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help" sx={{ cursor: 'pointer', color: 'primary.main' }}>
          <HelpOutlineIcon />
        </Tooltip>

        <Profiles></Profiles>

      </Box>
    </Box>
  )
}

export default AppBar
