import React from 'react'

import { Close } from '@mui/icons-material'
import { Fade, IconButton } from '@mui/material'
import { SnackbarProvider } from 'notistack'

export const notistackRef = React.createRef(null)

const action = (key) => (
  <IconButton color="inherit" onClick={() => notistackRef.current.closeSnackbar(key)}>
    <Close />
  </IconButton>
)

export const SnackProvider = ({ children }) => (
  <SnackbarProvider
    ref={notistackRef}
    maxSnack={2}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    TransitionComponent={Fade}
    autoHideDuration={2500}
    action={action}
    classes={{
      variantSuccess: 'bg-success-50 text-success-900',
      variantError: 'bg-error-50 text-error-900',
    }}
  >
    {children}
  </SnackbarProvider>
)

export const notify = {
  success: (content) => notistackRef.current.enqueueSnackbar(content, { variant: 'success' }),
  error: (content) => notistackRef.current.enqueueSnackbar(content, { variant: 'error' }),
}
