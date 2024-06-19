import React from 'react'
import { Card as MuiCard} from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import CommentIcon from '@mui/icons-material/Comment'
import LinkIcon from '@mui/icons-material/Link'
import GroupIcon from '@mui/icons-material/Group'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function Card(temporaryHideMedia) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer', overflow: 'unset',
        boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.2)'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography > Eryk Code test</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer', overflow: 'unset',
      boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.2)'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://top10tphcm.com/wp-content/uploads/2023/02/phong-canh-5.jpg"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography > Eryk Code </Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>15</Button>
        <Button size="small" startIcon={<LinkIcon />}>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card