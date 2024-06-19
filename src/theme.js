import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

// Create a theme instance.
const appBar_height = '58px'
const boardBar_height = '60px'
const Column_header_height = '50px'
const Column_footer_height = '56px'
const boardContent_height = `calc(100vh - ${appBar_height} - ${boardBar_height}) `

const theme = extendTheme({
  Trello: {
    appBarHeight: appBar_height,
    boardBarHeight: boardBar_height,
    boardContentHeight: boardContent_height,
    ColumnHeaderHeight: Column_header_height,
    ColumnFooterHeight: Column_footer_height
  },
  colorSchemes: {
    //   light: {
    //     palette: {
    //       primary: teal,
    //       secondary: deepOrange
    //     }
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: 'none',
          '&:hover': { borderWidth: '2px !important' },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: {
          // color: theme.palette.primary.main,
          fontSize: '0.875rem'
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // color: theme.palette.primary.main,
          '&.MuiTypography-body1': {fontSize: '0.875rem'}
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          // color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '& fieldset': { borderWidth: '1px !important' },
          '&:hover fieldset': { borderWidth: '2px !important' },
          '&.Mui-focused fieldset': { borderWidth: '2px !important' },
          // '.MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.primary.light
          // },
          // '&:hover': {
          //   '.MuiOutlinedInput-notchedOutline': {
          //     borderColor: theme.palette.primary.main
          //   }
          // }
        }
      }
    }
  }
}
  // ...other properties
)

export default theme