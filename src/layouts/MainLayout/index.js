import React from 'react'

import { Box, Paper } from '@mui/material'
import clsx from 'clsx'
import { Outlet } from 'react-router-dom'

import { MainLayoutProvider, MainLayoutConsumer } from './context'
import MainHeader from './libs/MainHeader'
import MainSidebar from './libs/MainSidebar'

const MainLayout = () => (
  <MainLayoutProvider>
    <Box className="flex bg-background">
      <MainHeader />
      <MainSidebar />

      <MainLayoutConsumer>
        {({ sidebarOpen }) => (
          <Box
            className={clsx(
              'flex w-full min-h-[calc(100vh-64px)] mt-[64px] p-2 flex-shrink-0',
              'transition-[width] duration-200 ease-in-out flex-shrink-0',
              sidebarOpen && 'md:w-[calc(100%-260px)]'
            )}
          >
            <Paper className="relative flex-1 p-3">
              <Outlet />
            </Paper>
          </Box>
        )}
      </MainLayoutConsumer>
    </Box>
  </MainLayoutProvider>
)

export default React.memo(MainLayout)
