import Column from './Column/Column'
import Box from '@mui/material/Box'


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

      
    </Box>
  )
}

export default ListColumns