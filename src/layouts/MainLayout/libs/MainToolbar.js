import React, { memo } from 'react'

import { AppBar, Stack, Toolbar } from '@mui/material'
import { IconButton } from 'components/atoms'
import { LanguageSwitcher } from 'components/organism'

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
        <IconButton name="sliders" onClick={() => setSidebarOpen(!sidebarOpen)} />
        <Stack direction="row" spacing={3} alignItems="center">
          <LanguageSwitcher />
          <MainUserSection />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default memo(MainToolbar)
