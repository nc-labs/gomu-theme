import { createTheme } from '@mui/material/styles'

const MuiInputBase = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        adornedEnd: {
          paddingRight: '0 !important',
        },
      },
    },
  },
}).components?.MuiInputBase

export default MuiInputBase
