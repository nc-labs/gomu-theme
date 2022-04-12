import React from 'react'

import { Stack, Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import AUTH_LAYOUT_CONFIGS from './configs'

const AuthLayout = () => (
  <Stack
    minHeight="100vh"
    p={AUTH_LAYOUT_CONFIGS.containerPadding}
    justifyContent="center"
    alignItems="center"
    bgcolor="background.default"
  >
    <Box
      sx={{
        width: AUTH_LAYOUT_CONFIGS.containerWidth,
        maxWidth: '100%',
      }}
    >
      <Outlet />
    </Box>
  </Stack>
)

export default React.memo(AuthLayout)
