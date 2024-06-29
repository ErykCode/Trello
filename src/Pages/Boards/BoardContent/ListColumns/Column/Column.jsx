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
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import { toast } from 'react-toastify'
import { useConfirm } from "material-ui-confirm"

function Column({ column,createNewCard, deleteColumnDetails }) {

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column._id, data: { ...column }
  });
  const dndKitColumnStype = {
    transform: CSS.Translate.toString(transform), transition, height: '100%',
    opacity: isDragging ? 0.5 : undefined,
  };

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  const orderedCards = column?.cards

  const [openNewCardForm, setOpenNewCardForm] = useState(false)
  const toggleOpenNewCardForm = () => setOpenNewCardForm(!openNewCardForm)

  const [newCardTitle, setNewCardTitle] = useState('')
  const addNewCard = () => {
    // console.log('hahah');
    if (!newCardTitle) {
      toast.error("Please Enter Card Title", { position: 'bottom-right'})
      return;
    }

     // tạo dl column để gọi API
     const NewCardData = {
      title: newCardTitle,
      columnId: column._id
    }
    // call api

    createNewCard(NewCardData)
    // call api

    //đóng trạng thái thêm column và clear input
    toggleOpenNewCardForm()
    setNewCardTitle('')
  }

  const confirmDeleteColumn = useConfirm()
  const handleDeleteColumn = () => {
    confirmDeleteColumn({ 
      description: "Hành động này sẽ xóa vĩnh viễn column và card của bạn! Bạn có muốn tiếp tục?" ,
      title: 'Xóa Column?'
    })
      .then(() => {
          deleteColumnDetails(column._id)
      })
      .catch(() => {
        /* ... */
      });
  };

  return (
    <div ref={setNodeRef} style={dndKitColumnStype} {...attributes} >
      <Box
        {...listeners}
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          ml: 2, borderRadius: '6px', height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.Trello.boardContentHeight} - 
        ${theme.spacing(5)}
        )`}}
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
              <MenuItem onClick={handleClose}
                sx={{
                  '&:hover': {color: 'success.light',
                  '& .add-card': {color: 'success.light'}}
                }}
              >
                <ListItemIcon> <AddCardIcon className='add-card' fontSize="small" /> </ListItemIcon>
                <ListItemText onClick={toggleOpenNewCardForm}>Add New Card</ListItemText>
              </MenuItem>

              <MenuItem onClick={handleClose} 
                sx={{
                  '&:hover': {color: 'warning.dark',
                  '& .delete-column': {color: 'warning.dark'}}
                }}
              >
                <ListItemIcon> <DeleteIcon className='delete-column' fontSize="small" /> </ListItemIcon>
                <ListItemText onClick={handleDeleteColumn}>Delete this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>


        </Box >

        {/* main */}
        <ListCards cards={orderedCards} />

        {/* footer */}
        < Box sx={{
          height: (theme) => theme.Trello.ColumnFooterHeight, p: 2,

        }}
        >
          {!openNewCardForm
            ? <Box
              onClick={toggleOpenNewCardForm}
              sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <Button startIcon={<AddCardIcon> /</AddCardIcon>}>Add New Card</Button>
              <Tooltip title="Drag to move">
                <DragHandleIcon sx={{ cursor: 'pointer' }} />
              </Tooltip>
            </Box>
            : <Box
              sx={{
                height: '100%',
                display: 'flex', alignItems: 'center', gap: 1,
              }}
            >
              <TextField
                onChange={(e) => setNewCardTitle(e.target.value)}
                size='small' label="Enter Card Title "
                type='text' variant="outlined" autoFocus
                value={newCardTitle}
                sx={{
                  '& label': { color: 'text.primary' },
                  '& input': {
                    color: (theme) => theme.palette.primary.main,
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : 'white')
                  },
                  '& label.Mui-focused': { color: (theme) => theme.palette.primary.main },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: (theme) => theme.palette.primary.main },
                    '&:hover fieldset': { borderColor: (theme) => theme.palette.primary.main },
                    '&. Mui-focused fieldset': { borderColor: (theme) => theme.palette.primary.main }
                  },
                  '& .MuiOutlinedInput-input': {
                    borderRadius: 1
                  }
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  onClick={addNewCard}
                  variant='contained' color='success' size='small'
                  sx={{
                    boxShadow: 'none',
                    border: '0.5px solid',
                    borderColor: (theme) => theme.palette.success.main,
                    '&:hover': { bgcolor: (theme) => theme.palette.success.main }
                  }}
                >Add</Button>
                <CloseIcon
                  fontSize='small'
                  sx={{
                    color: (theme) => theme.palette.warning.main,
                    cursor: 'pointer'
                  }}
                  onClick={toggleOpenNewCardForm}
                />
              </Box>
            </Box>
          }

        </Box >

      </Box >
    </div>
  )
}

export default Column