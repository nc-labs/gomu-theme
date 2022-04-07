import React from 'react'

import { Stack, Paper } from '@mui/material'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => (
  <Stack
    minHeight="100vh"
    p={6}
    justifyContent="center"
    alignItems="center"
    bgcolor={(theme) => theme.palette.common.background2}
  >
    <Paper
      sx={{
        width: 1024,
        maxWidth: '100%',
        p: { xs: 2, md: 4 },
      }}
    >
      <Outlet />
    </Paper>
  </Stack>
)

export default React.memo(AuthLayout)
