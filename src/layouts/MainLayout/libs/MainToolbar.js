import React, { memo } from 'react'

import { AppBar, Stack, Toolbar, IconButton } from '@mui/material'
import { Icon } from 'modules/components'
import LanguageSwitcher from 'templates/LanguageSwitcher'

import MAIN_LAYOUT_CONFIGS from '../configs'
import { useMainLayoutState } from '../context'

import MainUserSection from './MainUserSection'

const MainToolbar = () => {
  const { sidebarOpen, setSidebarOpen } = useMainLayoutState()

  return (
    <AppBar position="sticky" component="header" className="top-0 left-0 bg-white">
      <Toolbar
        className="justify-between border-b-1 border-divider"
        sx={{
          height: MAIN_LAYOUT_CONFIGS.toolbarHeight,
        }}
      >
        <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Icon name="menu" />
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
