import React from 'react'

import { Backdrop, CircularProgress } from '@mui/material'

const BackdropLoading = ({ loading = false }) => (
  <Backdrop className="absolute z-drawer" open={loading}>
    <CircularProgress color="primary" />
  </Backdrop>
)

export default React.memo(BackdropLoading)
