import React from 'react'
import { Card as MuiCard } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import CommentIcon from '@mui/icons-material/Comment'
import LinkIcon from '@mui/icons-material/Link'
import GroupIcon from '@mui/icons-material/Group'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Card({ card }) {

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card._id, data: { ...card }
  });
  const dndKitCardStype = {
    transform: CSS.Translate.toString(transform), transition,
    opacity: isDragging ? 0.5 : undefined
  };

  const shouldShowCardActions = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }

  return (
    <MuiCard
      ref={setNodeRef} style={dndKitCardStype} {...attributes} {...listeners}
      sx={{
        cursor: 'pointer', overflow: 'unset',
        boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.2)'
      }}>
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover}
      />
      }
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography > {card?.title} </Typography>
      </CardContent>
      {shouldShowCardActions() &&
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {!!card?.memberIds?.length &&
            <Button size="small" startIcon={<GroupIcon />}>{card?.memberIds?.length}</Button>
          }
          {!!card?.comments?.length &&
            <Button size="small" startIcon={<CommentIcon />}>{card?.comments?.length}</Button>
          }
          {!!card?.attachments?.length &&
            <Button size="small" startIcon={<LinkIcon />}>{card?.attachments?.length}</Button>
          }

        </CardActions>
      }
    </MuiCard>
  )
}

export default Card