import React from 'react'
import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards() {
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
      <Card/>
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      {/* column 2 */}

    </Box >
  )
}

export default ListCards