import React from 'react'
import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards({cards}) {
  return (
    < Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1, p: '3px 5px', m: '1px 5px', overflowX: 'hidden', overflowY: 'auto',
      maxHeight: (theme) => `calc(${theme.Trello.boardContentHeight} - 
    ${theme.spacing(5)} - 
    ${theme.Trello.ColumnHeaderHeight} - ${theme.Trello.ColumnFooterHeight}
    )`
    }}
    >
     
      {cards?.map(card => <Card key={card._id} card={card} />)}

    </Box >
  )
}

export default ListCards