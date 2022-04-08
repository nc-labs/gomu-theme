import { createTheme } from '@mui/material/styles'

const { palette } = createTheme({
  palette: {
    primary: { main: '#325EA5' },
    secondary: { main: '#CB473E' },
    background: {
      default: '#F6F7F9',
    },
    text: {
      primary: '#242424',
      secondary: '#747475',
      disabled: '#A1A2A3',
    },
    divider: '#DFE0EB',
  },
})

export default palette
