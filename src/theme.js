import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { BorderColor } from '@mui/icons-material'

// Create a theme instance.
const theme = extendTheme({
  Trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    }
  },
  dark: {
    palette: {
      primary: cyan,
      secondary: orange
    }
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: 'none'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: ({theme}) => ({
          color: theme.palette.primary.main,
          fontSize: 'o.875rem'
          
        }
      )
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: 'o.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main
            }
          }
        }
        )
      },
    },
  },
}
  // ...other properties
)

export default theme