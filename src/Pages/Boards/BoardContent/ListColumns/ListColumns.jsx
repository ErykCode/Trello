import Column from './Column/Column'
import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import NoteAddIcon from '@mui/icons-material/NoteAdd';


function ListColumns() {
  return (
    <Box
      sx={{
        display: 'flex',
        minWidth: '100%',
        maxWidth: '100%',
        overflowX: 'auto', overflowY: 'hidden',
        bgcolor: 'inherit'
      }}
    >

      <Column />
      <Column />

      {/* <Box
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
            color: 'white', with: '100%', justifyContent: 'flex-start',
            pl: 2.5, py: 1
          }}
        >
          Add New Colum
        </Button>
      </Box> */}
    </Box>
  )
}

export default ListColumns