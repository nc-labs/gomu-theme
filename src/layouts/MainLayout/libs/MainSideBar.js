import React, { useEffect } from 'react'

import { drawerClasses, Drawer, useMediaQuery, CardMedia, Stack } from '@mui/material'
import { Typography, Link, FlatList } from 'modules/components'
import { useLocation } from 'react-router-dom'
import { navigator } from 'routes/routeConfigs'

import MAIN_LAYOUT_CONFIGS from '../configs'
import { useMainLayoutState } from '../context'

import MainNavGroup from './MainNavGroup'

const MainSideBar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('lg'))
  const { sidebarOpen, setSidebarOpen } = useMainLayoutState()
  const { pathname } = useLocation()

  useEffect(() => {
    setSidebarOpen(!isMobile)
  }, [isMobile])

  useEffect(() => {
    if (!isMobile) return

    setSidebarOpen(false)
  }, [pathname])

  return (
    <Drawer
      sx={{
        [`& .${drawerClasses.paper}`]: {
          width: MAIN_LAYOUT_CONFIGS.sideBarWidth,
          border: 'none',
        },
      }}
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor="left"
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Stack position="relative">
        <Link to="/" alt="home" className="sticky top-0 z-[10]">
          <Stack
            direction="row"
            spacing={3}
            className="items-center w-full px-3 cursor-pointer bg-primary"
            sx={{ height: MAIN_LAYOUT_CONFIGS.toolbarHeight }}
          >
            <CardMedia
              src="/assets/images/logo.png"
              component="img"
              className="h-[36px] w-[36px] flex-none rounded-2"
            />
            <Typography variant="title" className="text-white">
              Edufit SSM
            </Typography>
          </Stack>
        </Link>

        <Stack p={MAIN_LAYOUT_CONFIGS.containerPadding}>
          <FlatList
            data={Object.keys(navigator)}
            renderItems={(translation) => (
              <MainNavGroup translation={translation} items={navigator[translation]} />
            )}
          />
        </Stack>
      </Stack>
    </Drawer>
  )
}

export default React.memo(MainSideBar)
