import React from 'react'

import { createTheme, ThemeProvider as MuiProvider } from '@mui/material/styles'

import breakpoints from './libs/breakpoints'
import MuiBackdrop from './libs/MuiBackdrop'
import MuiButton from './libs/MuiButton'
import MuiListItemIcon from './libs/MuiListItemIcon'
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
    MuiBackdrop,
    MuiListItemIcon,
  },
  spacing: 4,
  shape: {
    borderRadius: 8,
  },
})

export const DefaultThemeProvider = React.memo(({ children }) => (
  <MuiProvider theme={theme}>{children}</MuiProvider>
))
