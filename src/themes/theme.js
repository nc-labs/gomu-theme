import React from 'react'

import { createTheme, ThemeProvider as MuiProvider } from '@mui/material/styles'

import breakpoints from './libs/breakpoints'
import MuiButton from './libs/MuiButton'
import MuiMenu from './libs/MuiMenu'
import MuiTypography from './libs/MuiTypography'
import palette from './libs/palette'
import shadows from './libs/shadows'
import typography from './libs/typography'

export const theme = createTheme({
  breakpoints,
  palette,
  shadows,
  typography,
  components: {
    MuiButton,
    MuiTypography,
    MuiMenu,
  },
  spacing: 4,
  shape: {
    borderRadius: 8,
  },
})
export const DefaultThemeProvider = React.memo(({ children }) => (
  <MuiProvider theme={theme}>{children}</MuiProvider>
))
