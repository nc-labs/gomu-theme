import { createTheme } from '@mui/material/styles'

const MuiList = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
}).components?.MuiList

export default MuiList
