import { createTheme } from '@mui/material/styles'

const MuiBackdrop = createTheme({
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: 'rgb(0 0 0 / 25%)',
        },
      },
    },
  },
}).components?.MuiBackdrop

export default MuiBackdrop
