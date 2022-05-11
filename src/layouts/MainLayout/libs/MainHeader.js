import React from 'react'

import { AppBar, Toolbar } from '@mui/material'
import { IconButton } from 'components'

import { useMainLayoutState } from '../context'

import MainUserSection from './MainUserSection'

const MainHeader = () => {
  const { toggleSidebar } = useMainLayoutState()

  return (
    <AppBar className="h-[64px] bg-white transition-[width] fixed shadow-none">
      <Toolbar className="flex justify-between p-4 border-b-1 border-b-divider">
        <IconButton name="menu" onClick={toggleSidebar} />
        <MainUserSection />
      </Toolbar>
    </AppBar>
  )
}

export default React.memo(MainHeader)
