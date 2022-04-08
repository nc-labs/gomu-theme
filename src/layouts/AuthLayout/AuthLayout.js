import React from 'react'

import { Stack, Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => (
  <Stack
    minHeight="100vh"
    p={6}
    justifyContent="center"
    alignItems="center"
    bgcolor="background.default"
  >
    <Box
      sx={{
        width: 1024,
        maxWidth: '100%',
      }}
    >
      <Outlet />
    </Box>
  </Stack>
)

export default React.memo(AuthLayout)
