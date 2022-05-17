import { createTheme } from '@mui/material/styles'

const MuiListItem = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '4px',
        },
      },
    },
  },
}).components?.MuiListItem

export default MuiListItem
