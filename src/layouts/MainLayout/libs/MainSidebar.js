import React, { useEffect } from 'react'

import { Box, Drawer, Paper, useMediaQuery, List, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import clsx from 'clsx'
import { FlatList } from 'components'
import { navigator } from 'routes/configs'

import { useMainLayoutState } from '../context'

import MainNavItem from './MainNavItem'
import MainNavMenu from './MainNavMenu'

const MainSidebar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { sidebarOpen, toggleSidebar } = useMainLayoutState()

  useEffect(() => {
    toggleSidebar(!isMobile)
  }, [isMobile])

  return (
    <Box component="nav" className={clsx(isMobile ? 'w-auto' : 'w-[260px]')}>
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={sidebarOpen}
        onClose={toggleSidebar}
        ModalProps={{ keepMounted: true }}
        color="inherit"
        classes={{
          paper: 'w-[260px] md:top-[72px] border-r-0',
        }}
      >
        <Paper className="p-3">
          <List component={Stack} spacing={1} disablePadding>
            <FlatList
              data={navigator}
              renderItems={(item) =>
                item.items ? <MainNavMenu {...item} /> : <MainNavItem {...item} />
              }
            />
          </List>
        </Paper>
      </Drawer>
    </Box>
  )
}

export default React.memo(MainSidebar)
