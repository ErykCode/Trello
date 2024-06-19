import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Avatar from '@mui/material/Avatar'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import FilterListIcon from '@mui/icons-material/FilterList'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'

const ChipStyle = {
  color: 'primary.main',
  bgcolor: 'white',
  bordercolor: '4px',
  border: 'none',
  paddingX: '4px',
  borderRadius: '5px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main',
  },
  '&:hover': {
    bgcolor: 'primary.50',
  },
}


function BoardBar() {
  return (
    <Box px={2} sx={{
      display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between',
      height: (theme) => theme.Trello.boardBarHeight,
      gap: 2, overflowX: 'auto', borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip icon={<DashboardIcon />} clickable label="Eryk Trello Code"
          avatar={<Avatar alt="Eryk" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/258782338_434839908007537_5081408040958362133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHn3knEYYoPzBn6fhi0QaSaFScyAOsVjaMVJzIA6xWNo_bm46TC-E-YG3qCWhyadH_Tth0OqRBGDmHyF21MkTbB&_nc_ohc=_Dgep1-k1zUQ7kNvgERVnqK&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYBagYy_ClMbsWx2AFHzjz0HkxWblk3AQJrnn6rTzvCxUg&oe=6677B4D8" />}
          sx={ChipStyle}
        />
        <Chip icon={<VpnLockIcon />} clickable label="Pulic/Private Workspace"
          sx={ChipStyle}
        />
        <Chip icon={<AddToDriveIcon />} clickable label="Add To Google Drive"
          sx={ChipStyle}
        />
        <Chip icon={<FilterListIcon />} clickable label="Filters"
          sx={ChipStyle}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>
          Invite
        </Button>

        <AvatarGroup max={6}
          sx={{
            '& .MuiAvatar-root': {
              width: 32, height: 32, fontSize: 18
            }
          }}
        >
          <Tooltip title="Eryk Code Trello">
            <Avatar alt="Eryk" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/258782338_434839908007537_5081408040958362133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHn3knEYYoPzBn6fhi0QaSaFScyAOsVjaMVJzIA6xWNo_bm46TC-E-YG3qCWhyadH_Tth0OqRBGDmHyF21MkTbB&_nc_ohc=_Dgep1-k1zUQ7kNvgERVnqK&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYBagYy_ClMbsWx2AFHzjz0HkxWblk3AQJrnn6rTzvCxUg&oe=6677B4D8" />
          </Tooltip>
          <Tooltip title="Eryk Code Trello">
            <Avatar alt="Eryk" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/258782338_434839908007537_5081408040958362133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHn3knEYYoPzBn6fhi0QaSaFScyAOsVjaMVJzIA6xWNo_bm46TC-E-YG3qCWhyadH_Tth0OqRBGDmHyF21MkTbB&_nc_ohc=_Dgep1-k1zUQ7kNvgERVnqK&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYBagYy_ClMbsWx2AFHzjz0HkxWblk3AQJrnn6rTzvCxUg&oe=6677B4D8" />
          </Tooltip>
          <Tooltip title="Eryk Code Trello">
            <Avatar alt="Eryk" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/258782338_434839908007537_5081408040958362133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHn3knEYYoPzBn6fhi0QaSaFScyAOsVjaMVJzIA6xWNo_bm46TC-E-YG3qCWhyadH_Tth0OqRBGDmHyF21MkTbB&_nc_ohc=_Dgep1-k1zUQ7kNvgERVnqK&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYBagYy_ClMbsWx2AFHzjz0HkxWblk3AQJrnn6rTzvCxUg&oe=6677B4D8" />
          </Tooltip>
          <Tooltip title="Eryk Code Trello">
            <Avatar alt="Eryk" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/258782338_434839908007537_5081408040958362133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHn3knEYYoPzBn6fhi0QaSaFScyAOsVjaMVJzIA6xWNo_bm46TC-E-YG3qCWhyadH_Tth0OqRBGDmHyF21MkTbB&_nc_ohc=_Dgep1-k1zUQ7kNvgERVnqK&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYBagYy_ClMbsWx2AFHzjz0HkxWblk3AQJrnn6rTzvCxUg&oe=6677B4D8" />
          </Tooltip>
          <Tooltip title="Eryk Code Trello">
            <Avatar alt="Eryk" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/258782338_434839908007537_5081408040958362133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHn3knEYYoPzBn6fhi0QaSaFScyAOsVjaMVJzIA6xWNo_bm46TC-E-YG3qCWhyadH_Tth0OqRBGDmHyF21MkTbB&_nc_ohc=_Dgep1-k1zUQ7kNvgERVnqK&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYBagYy_ClMbsWx2AFHzjz0HkxWblk3AQJrnn6rTzvCxUg&oe=6677B4D8" />
          </Tooltip>
          <Tooltip title="Eryk Code Trello">
            <Avatar alt="Eryk" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/258782338_434839908007537_5081408040958362133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHn3knEYYoPzBn6fhi0QaSaFScyAOsVjaMVJzIA6xWNo_bm46TC-E-YG3qCWhyadH_Tth0OqRBGDmHyF21MkTbB&_nc_ohc=_Dgep1-k1zUQ7kNvgERVnqK&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYBagYy_ClMbsWx2AFHzjz0HkxWblk3AQJrnn6rTzvCxUg&oe=6677B4D8" />
          </Tooltip>
          <Tooltip title="Eryk Code Trello">
            <Avatar alt="Eryk" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/258782338_434839908007537_5081408040958362133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHn3knEYYoPzBn6fhi0QaSaFScyAOsVjaMVJzIA6xWNo_bm46TC-E-YG3qCWhyadH_Tth0OqRBGDmHyF21MkTbB&_nc_ohc=_Dgep1-k1zUQ7kNvgERVnqK&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYBagYy_ClMbsWx2AFHzjz0HkxWblk3AQJrnn6rTzvCxUg&oe=6677B4D8" />
          </Tooltip>
          <Tooltip title="Eryk Code Trello">
            <Avatar alt="Eryk" src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/258782338_434839908007537_5081408040958362133_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHn3knEYYoPzBn6fhi0QaSaFScyAOsVjaMVJzIA6xWNo_bm46TC-E-YG3qCWhyadH_Tth0OqRBGDmHyF21MkTbB&_nc_ohc=_Dgep1-k1zUQ7kNvgERVnqK&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYBagYy_ClMbsWx2AFHzjz0HkxWblk3AQJrnn6rTzvCxUg&oe=6677B4D8" />
          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar
