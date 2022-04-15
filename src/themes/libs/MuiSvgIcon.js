import { createTheme } from '@mui/material/styles'

const MuiSvgIcon = createTheme({
  components: {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'medium',
      },
      styleOverrides: {
        fontSizeSmall: {
          width: 16,
          height: 16,
        },
        fontSizeMedium: {
          width: 24,
          height: 24,
        },
        fontSizeLarge: {
          width: 32,
          height: 32,
        },
      },
    },
  },
}).components?.MuiSvgIcon

export default MuiSvgIcon
