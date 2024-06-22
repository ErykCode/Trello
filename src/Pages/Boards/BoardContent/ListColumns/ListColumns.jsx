import Column from './Column/Column'
import Box from '@mui/material/Box'
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Button from '@mui/material/Button'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  return (
    <SortableContext items={columns?.map(c=>c._id )} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          display: 'flex',
          minWidth: '100%',
          maxWidth: '100%',
          overflowX: 'auto', overflowY: 'hidden',
          bgcolor: 'inherit'
        }}
      >
        {columns?.map(column => <Column key={column._id} column={column} />)}

        {/* Box Add New Column */}
        <Box
          sx={{
            minWidth: '200px',
            maxWidth: '200px',
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

      </Box>
    </SortableContext>
  )
}

export default ListColumns