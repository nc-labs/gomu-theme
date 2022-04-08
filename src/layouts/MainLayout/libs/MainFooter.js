import React, { memo } from 'react'

import { AppBar } from '@mui/material'
import { Typography } from 'components/atoms'

import MAIN_LAYOUT_CONFIGS from '../configs'

const MainFooter = () => (
  <AppBar
    position="static"
    component="footer"
    sx={{
      display: 'flex',
      height: MAIN_LAYOUT_CONFIGS.footerHeight,
      px: 4,
      alignItems: 'flex-end',
      justifyContent: 'center',
      bgcolor: 'background.default',
    }}
  >
    <Typography color="muted" sx={{ fontSize: { xs: 10, md: 12 } }}>
      Copyright © 2022. Bản quyền site thuộc về Công ty Edufit
    </Typography>
  </AppBar>
)

export default memo(MainFooter)
