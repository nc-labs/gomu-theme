import React, { memo } from 'react'

import { AppBar } from '@mui/material'
import { Typography } from 'modules/components'

import MAIN_LAYOUT_CONFIGS from '../configs'

const MainFooter = () => (
  <AppBar
    position="static"
    component="footer"
    className="flex items-end justify-center px-4 bg-background"
    sx={{ height: MAIN_LAYOUT_CONFIGS.footerHeight }}
  >
    <Typography color="muted" className="text-[10px] md:text-[12px]">
      Copyright © 2022. Bản quyền site thuộc về Công ty Edufit
    </Typography>
  </AppBar>
)

export default memo(MainFooter)
