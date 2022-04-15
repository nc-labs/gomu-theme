import React from 'react'

import { Stack, Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import AUTH_LAYOUT_CONFIGS from './configs'

const AuthLayout = () => (
  <Stack
    className="items-center justify-center min-h-screen bg-background"
    p={AUTH_LAYOUT_CONFIGS.containerPadding}
  >
    <Box
      className="max-w-full"
      sx={{
        width: AUTH_LAYOUT_CONFIGS.containerWidth,
      }}
    >
      <Outlet />
    </Box>
  </Stack>
)

export default React.memo(AuthLayout)
