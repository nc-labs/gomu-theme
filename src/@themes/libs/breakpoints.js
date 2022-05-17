import { createTheme } from '@mui/material/styles'

const { breakpoints } = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
})

export default breakpoints
