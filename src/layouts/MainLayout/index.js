import React from 'react'

import { CssBaseline, Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import MAIN_LAYOUT_CONFIGS from './configs'
import { MainLayoutProvider, MainLayoutConsumer } from './context'
import MainContainer from './libs/MainContainer'
import MainFooter from './libs/MainFooter'
import SideBar from './libs/MainSideBar'
import MainToolbar from './libs/MainToolbar'

const MainLayout = () => (
  <MainLayoutProvider>
    <CssBaseline />
    <SideBar />
    <MainLayoutConsumer>
      {({ sidebarOpen }) => (
        <Box
          component="main"
          className="bg-background"
          sx={{
            marginLeft: {
              lg: sidebarOpen ? `${MAIN_LAYOUT_CONFIGS.sideBarWidth}px` : 0,
            },
            transition: (theme) =>
              theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
          }}
        >
          <MainToolbar />

          <MainContainer>
            <Outlet />
          </MainContainer>

          <MainFooter />
        </Box>
      )}
    </MainLayoutConsumer>
  </MainLayoutProvider>
)

export default MainLayout
