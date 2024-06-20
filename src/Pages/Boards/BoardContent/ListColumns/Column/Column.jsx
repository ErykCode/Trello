import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import DeleteIcon from '@mui/icons-material/Delete'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Tooltip from '@mui/material/Tooltip'
import AddCardIcon from '@mui/icons-material/AddCard'
import Cloud from '@mui/icons-material/Cloud'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '~/Utils/sorts'

function Column({column}) {

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')

  return (
    < Box
      sx={{
        minWidth: '300px',
        maxWidth: '300px',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        ml: 2, borderRadius: '6px', height: 'fit-content',
        maxHeight: (theme) => `calc(${theme.Trello.boardContentHeight} - 
      ${theme.spacing(5)}
      )`
      }
      }
    >
      {/* header */}
      < Box sx={{
        height: (theme) => theme.Trello.ColumnHeaderHeight, 
        p: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
      >
        <Typography
          variant='h6'
          sx={{
            fontWeight: 'bold', cursor: 'pointer', fontSize: '1.2rem'
          }}
        >
            {column.title}
        </Typography>
        <Box>
          <Tooltip title='More Option'>
            <ExpandMoreIcon
              sx={{ color: 'text.primary', cursor: 'pointer' }}
              id="basic-button-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown"' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-column-dropdown"',
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon> <AddCardIcon fontSize="small" /> </ListItemIcon>
              <ListItemText>Add New Card</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon> <ContentCut fontSize="small" /> </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon> <ContentCut fontSize="small" /> </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon> <ContentCut fontSize="small" /> </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>

            <Divider />

            <MenuItem onClick={handleClose}>
              <ListItemIcon> <DeleteIcon fontSize="small" /> </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon> <Cloud fontSize="small" /> </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>


      </Box >

      {/* main */}
      <ListCards cards={orderedCards} />

      {/* footer */}
      < Box sx={{
        height: (theme) => theme.Trello.ColumnFooterHeight, p: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
      >
        <Button startIcon={<AddCardIcon> /</AddCardIcon>}>Add New Card</Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
      </Box >

    </Box >
  )
}

export default Column