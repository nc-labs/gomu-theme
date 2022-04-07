import React, { useEffect } from 'react'

import { Drawer, useMediaQuery, CardMedia, Stack } from '@mui/material'
import { Typography, Link } from 'components/atoms'

import MAIN_LAYOUT_CONFIGS from '../configs'
import { useMainLayoutState } from '../context'
import NAV_GOUPS from '../navigatorConfigs'

import MainNavGroup from './MainNavGroup'

const MainSideBar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))
  const { sidebarOpen, setSidebarOpen } = useMainLayoutState()

  useEffect(() => {
    setSidebarOpen(!isMobile)
  }, [isMobile])

  return (
    <Drawer
      sx={{
        '& .MuiDrawer-paper': {
          width: MAIN_LAYOUT_CONFIGS.sideBarWidth,
          border: 'none',
        },
      }}
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor="left"
      open={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
    >
      <Stack>
        <Link to="/" alt="home">
          <Stack
            direction="row"
            spacing={3}
            sx={{
              height: MAIN_LAYOUT_CONFIGS.toolbarHeight,
              width: '100%',
              px: 3,
              background: (theme) => theme.palette.primary.main,
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <CardMedia
              src="/assets/images/logo.png"
              component="img"
              sx={{ height: 36, width: 36, flex: 0, borderRadius: 1 }}
            />
            <Typography variant="title" sx={{ color: (theme) => theme.palette.common.white }}>
              Edufit SSM
            </Typography>
          </Stack>
        </Link>

        <Stack p={MAIN_LAYOUT_CONFIGS.containerPadding}>
          {Object.keys(NAV_GOUPS).map((translation, index) => (
            <MainNavGroup translation={translation} items={NAV_GOUPS[translation]} key={index} />
          ))}
        </Stack>
      </Stack>
    </Drawer>
  )
}

export default React.memo(MainSideBar)
