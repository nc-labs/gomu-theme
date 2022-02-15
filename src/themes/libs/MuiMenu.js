import { createTheme } from '@mui/material/styles'

const MuiMenu = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        root: {
          background: 'rgb(0 0 0 / 25%)',
        },
      },
    },
  },
}).components?.MuiMenu

export default MuiMenu
