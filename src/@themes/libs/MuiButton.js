import { createTheme } from '@mui/material/styles'

const MuiButton = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          lineHeight: 'normal',
          textTransform: 'none',
        },
        sizeSmall: {
          height: '32px',
          borderRadius: '16px',
          paddingLeft: '16px',
          paddingRight: '16px',
        },
        sizeMedium: {
          height: '48px',
          borderRadius: '24px',
          paddingLeft: '24px',
          paddingRight: '24px',
        },
      },
    },
  },
}).components?.MuiButton

export default MuiButton
