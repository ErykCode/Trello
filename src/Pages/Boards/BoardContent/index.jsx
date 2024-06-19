import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function BoardContent() {

  const Column_header_height = '50px'
  const Column_footer_height = '56px'

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  return (
    <Box sx={{
      display: 'flex',
      width: '100%', backgroundColor: 'info.dark',
      height: (theme) => theme.Trello.boardContentHeight,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#273c75' : '#4b7bec')
    }}>
      {/* Box Column */}
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          ml: 2, borderRadius: '6px',
        }}
      >
        {/* header */}
        <Box sx={{
          height: Column_header_height, p: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',

        }}
        >
          <Typography>Column Title</Typography>
          <Box>
            <ExpandMoreIcon 
              sx={{ color: 'text.primary', cursor: 'pointer'}}
              id="basic-button-recent"
              aria-controls={open ? 'basic-menu-recent' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
            <Menu
              id="basic-menu-recent"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button-recent',
              }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Web Clipboard</ListItemText>
              </MenuItem>
            </Menu>
          </Box> 
            

        </Box>

        {/* main */}
        <Box sx={{

        }}
        >

        </Box>

        {/* footer */}
        <Box sx={{
          height: Column_footer_height, p: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
        >

        </Box>

      </Box>
    </Box>
  )
}

export default BoardContent
