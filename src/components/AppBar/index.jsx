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

function AppBar() {
  return (
      <Box px={2} sx={{
        display: 'flex', alignItems: 'center', 
        width: '100%', height: (theme) => theme.Trello.appBarHeight,
        justifyContent: 'space-between'
      }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
          <AppsIcon  sx={{color: 'primary.main'}}></AppsIcon>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5}}>
            <SvgIcon component={trelloIcon} inheritViewBox sx={{color: 'primary.main'}} />
            <Typography variant="span" sx={{fontWeight: 'bold', fontSize: '1.5rem', color: 'primary.main'}}>Trello</Typography>
            <WorkSpaces></WorkSpaces>
            <Recent></Recent>
            <Starred></Starred>
            <Templates></Templates>

            <Button variant="outlined">Create</Button>
          </Box>
        </Box>  

        <Box>
        <ModeSelect />

        </Box>
      </Box>
  )
}

export default AppBar
