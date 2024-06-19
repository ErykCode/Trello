import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
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
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CommentIcon from '@mui/icons-material/Comment';
import LinkIcon from '@mui/icons-material/Link'
import GroupIcon from '@mui/icons-material/Group';

function BoardContent() {

  const Column_header_height = '50px'
  const Column_footer_height = '56px'

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  return (
    <Box sx={{
      display: 'flex',p: '5px 0',
      width: '100%', backgroundColor: 'info.dark',
      height: (theme) => theme.Trello.boardContentHeight,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#273c75' : '#4b7bec')
    }}>

      <Box
        sx={{
          display: 'flex',
          minWidth: '100%',
          maxWidth: '100%',
          overflowX: 'auto', overflowY: 'hidden',
          bgcolor: 'inherit'
        }}
      >

        {/* Box Column */}
        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
            ml: 2, borderRadius: '6px', height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.Trello.boardContentHeight} - 
          ${theme.spacing(5)}
          )`
          }}
        >
          {/* header */}
          <Box sx={{
            height: Column_header_height, p: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold', cursor: 'pointer', fontSize: '1.2rem'
              }}
            >
              Column Title
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


          </Box>

          {/* main */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1, p: '3px 5px', m: '1px 5px', overflowX: 'hidden', overflowY: 'auto',
            maxHeight: (theme) => `calc(${theme.Trello.boardContentHeight} - 
          ${theme.spacing(5)} - 
          ${Column_header_height} - ${Column_footer_height}
          )`
          }}
          >
            <Card sx={{
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
            </Card>
            {/* column 2 */}
            <Card sx={{
              cursor: 'pointer', overflow: 'unset',
            }}>

              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography > Eryk Code 02</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer', overflow: 'unset',
            }}>

              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography > Eryk Code 02</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer', overflow: 'unset',
            }}>

              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography > Eryk Code 02</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer', overflow: 'unset',
            }}>

              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography > Eryk Code 02</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer', overflow: 'unset',
            }}>

              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography > Eryk Code 02</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer', overflow: 'unset',
            }}>

              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography > Eryk Code 02</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer', overflow: 'unset',
            }}>

              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography > Eryk Code 02</Typography>
              </CardContent>
            </Card>

          </Box>

          {/* footer */}
          <Box sx={{
            height: Column_footer_height, p: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
          >
            <Button startIcon={<AddCardIcon> /</AddCardIcon>}>Add New Card</Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>

        </Box>

        {/* Box Column 02*/}
        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
            ml: 2, borderRadius: '6px', height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.Trello.boardContentHeight} - 
          ${theme.spacing(5)}`
          }}
        >
          {/* header */}
          <Box sx={{
            height: Column_header_height, p: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold', cursor: 'pointer', fontSize: '1.2rem'
              }}
            >
              Column Title
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


          </Box>

          {/* main */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1, p: '3px 5px', m: '1px 5px', overflowX: 'hidden', overflowY: 'auto',
            maxHeight: (theme) => `calc(${theme.Trello.boardContentHeight} - 
          ${theme.spacing(5)} - 
          ${Column_header_height} - ${Column_footer_height}
          )`
          }}
          >
            <Card sx={{
              cursor: 'pointer', overflow: 'unset',
            }}>

              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography > Eryk Code 02</Typography>
              </CardContent>
            </Card>

            <Card sx={{
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
            </Card>


            <Card sx={{
              cursor: 'pointer', overflow: 'unset',
            }}>

              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography > Eryk Code 02</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer', overflow: 'unset',
            }}>

              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography > Eryk Code 02</Typography>
              </CardContent>
            </Card>

          </Box>

          {/* footer */}
          <Box sx={{
            height: Column_footer_height, p: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
          >
            <Button startIcon={<AddCardIcon> /</AddCardIcon>}>Add New Card</Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>

        </Box>

      </Box>
    </Box>
  )
}

export default BoardContent
