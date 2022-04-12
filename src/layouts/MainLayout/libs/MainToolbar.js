import React, { memo } from 'react'

import { AppBar, Stack, Toolbar, IconButton } from '@mui/material'
import { LanguageSwitcher } from 'components'
import Svg from 'svg'

import MAIN_LAYOUT_CONFIGS from '../configs'
import { useMainLayoutState } from '../context'

import MainUserSection from './MainUserSection'

const MainToolbar = () => {
  const { sidebarOpen, setSidebarOpen } = useMainLayoutState()

  return (
    <AppBar
      position="static"
      component="header"
      sx={{ bgcolor: (theme) => theme.palette.common.white }}
    >
      <Toolbar sx={{ height: MAIN_LAYOUT_CONFIGS.toolbarHeight, justifyContent: 'space-between' }}>
        <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Svg.Menu />
        </IconButton>
        <Stack direction="row" spacing={3} alignItems="center">
          <LanguageSwitcher />
          <MainUserSection />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default memo(MainToolbar)
