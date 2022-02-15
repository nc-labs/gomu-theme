import { createTheme } from '@mui/material/styles'

const { palette } = createTheme({
  palette: {
    primary: { main: '#325EA5' },
    secondary: { main: '#CB473E' },
    background: {
      background1: '#F6F7FB',
      background2: '#F6F7F9',
      background3: '#F0F1F5',
    },
    text: {
      primary: '#242424',
      secondary: '#747475',
      disabled: '#A1A2A3',
    },
    common: {
      background1: '#F6F7FB',
      background2: '#F6F7F9',
      background3: '#F0F1F5',
      text1: '#242424',
      text2: '#747475',
      text3: '#A1A2A3',
      white: '#ffffff',
      outline: '#DFE0EB',
    },
  },
})

export default palette
