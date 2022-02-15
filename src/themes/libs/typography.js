import { createTheme } from '@mui/material/styles'
import THEME_CONFIGS from 'themes/configs'

const { typography } = createTheme({
  typography: {
    fontFamily: THEME_CONFIGS.fontFamily,
    caption: {
      // tiny variant
      fontSize: '10px',
    },
    body2: {
      // caption variant
      fontSize: '12px',
    },
    body1: {
      // body variant
      fontSize: '14px',
    },
    subtitle2: {
      // subtitle variant
      fontSize: '16px',
      fontWeight: 'bold',
    },
    subtitle1: {
      // title variant
      fontSize: '18px',
      fontWeight: 'bold',
    },
    h6: {
      // heading variant
      fontSize: '20px',
      fontWeight: 'bold',
    },
  },
})

export default typography
