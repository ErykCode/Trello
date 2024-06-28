import Column from './Column/Column'
import Box from '@mui/material/Box'
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Button from '@mui/material/Button'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react';
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'
import { toast } from 'react-toastify';


function ListColumns({ columns , createNewColumn,createNewCard}) {

  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)

  const [newColumnTitle, setNewColumnTitle] = useState('')
  
  const addNewColumn = () => {
    if (!newColumnTitle) {
      toast.error("Please Enter Column Title", { position: 'bottom-left' })
    }

    // tạo dl column để gọi API
    const NewColumnData = {
      title: newColumnTitle
    }

    createNewColumn(NewColumnData)
    // call api

    //đóng trạng thái thêm column và clear input
    toggleOpenNewColumnForm()
    setNewColumnTitle('')
  }

  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          display: 'flex',
          minWidth: '100%',
          maxWidth: '100%',
          overflowX: 'auto', overflowY: 'hidden',
          bgcolor: 'inherit'
        }}
      >
        {columns?.map(column => <Column key={column._id} column={column} createNewCard={createNewCard}/>)}

        {/* Box Add New Column */}
        {!openNewColumnForm
          ? <Box
            onClick={toggleOpenNewColumnForm}
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2, borderRadius: '5px',
              height: 'fit-content', bgcolor: '#ffffff3d'
            }}
          >
            <Button
              startIcon={<NoteAddIcon />}
              sx={{
                color: 'white', width: '100%', justifyContent: 'flex-start',
                pl: 2.5, py: 1
              }}
            >
              Add New Colum
            </Button>
          </Box>
          : <Box
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2, borderRadius: '5px', p: 1,
              height: 'fit-content', bgcolor: '#ffffff3d',
              display: 'flex', flexDirection: 'column', gap: 1
            }}
          >
            <TextField
              onChange={(e) => setNewColumnTitle(e.target.value)}
              size='small' label="Enter Column Title "
              type='text' variant="outlined" autoFocus
              value={newColumnTitle}
              sx={{
                '& label': { color: 'white' },
                '& input': { color: 'white' },
                '& label.Mui-focused': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'white' },
                  '&:hover fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: 'white' },
                }
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap:1 }}>
              <Button
                onClick={addNewColumn}
                variant='contained' color='success' size='small'
                sx={{
                  boxShadow: 'none',
                  border: '0.5px solid',
                  borderColor: (theme) => theme.palette.success.main,
                  '&:hover': { bgcolor: (theme) => theme.palette.success.main }
                }}
              >Add Column</Button>
              <CloseIcon
                fontSize='small'
                sx={{ 
                  color: 'white', cursor: 'pointer', 
                  '&:hover':{color: (theme) => theme.palette.primary.main} 
                }}
                onClick={toggleOpenNewColumnForm}
              />
            </Box>
          </Box>
        }


      </Box>
    </SortableContext >
  )
}

export default ListColumns