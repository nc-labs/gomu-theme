import React from 'react'

import { CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { MainLayoutProvider } from './context'
import MainContainer from './libs/MainContainer'
import SideBar from './libs/MainSideBar'

const MainLayout = () => (
  <MainLayoutProvider>
    <CssBaseline />
    <SideBar />
    <MainContainer>
      <Outlet />
    </MainContainer>
  </MainLayoutProvider>
)

export default MainLayout
