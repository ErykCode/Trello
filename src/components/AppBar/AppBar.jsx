import ModeSelect from '~/components/ModeSelect/ModeSelect'
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
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {
  const [search, setSearch] = useState('')
  return (
    <Box px={2} sx={{
      display: 'flex', alignItems: 'center',
      width: '100%', height: (theme) => theme.Trello.appBarHeight,
      justifyContent: 'space-between', gap: 2, overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#192a56' : '#3867d6 ')
    }}>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }}></AppsIcon>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={trelloIcon} inheritViewBox fontSize='small' sx={{ color: 'white' }} />
          <Typography variant="span" sx={{ fontWeight: 'bold', fontSize: '1.4rem', color: 'white' }}>Trello</Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <WorkSpaces></WorkSpaces>
            <Recent></Recent>
            <Starred></Starred>
            <Templates></Templates>

            <Button
              sx={{
                color: 'white',
                border: 'none',
                '&:hover': {
                  border: 'none',
                }
              }}
              variant="outlined" startIcon={<LibraryAddIcon />}
            >
              Create</Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="outlined-basic" size='small' label="Search"
          type='text' variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <CloseIcon
                  fontSize='small'
                  sx={{ color: search ? 'white' : 'transparent', cursor: 'pointer' }}
                  onClick={() => setSearch('')}
                />
              </InputAdornment>
            )
          }}
          sx={{
            minWidth: 120,
            maxWidth: 180,
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              paddingRight: 0,
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            }
          }}
        />
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge variant="dot" color="warning" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help" sx={{ cursor: 'pointer', color: 'white' }}>
          <HelpOutlineIcon />
        </Tooltip>

        <Profiles></Profiles>

      </Box>
    </Box>
  )
}

export default AppBar
