import React from 'react'

import { Box, Paper, Stack } from '@mui/material'
import { Typography } from 'components/atoms'

import MAIN_LAYOUT_CONFIGS from '../configs'
import { useMainLayoutState } from '../context'

import MainFooter from './MainFooter'
import MainToolbar from './MainToolbar'

const {
  toolbarHeight,
  headerHeight,
  footerHeight,
  containerPadding,
  sideBarWidth,
  containerWidth,
} = MAIN_LAYOUT_CONFIGS
const containerMinHeight = `calc(100vh - ${headerHeight + footerHeight}px)`

const MainContainer = ({ children }) => {
  const { sidebarOpen, headerTitle, cardTitle } = useMainLayoutState()

  return (
    <Box
      component="main"
      sx={{
        marginLeft: {
          lg: sidebarOpen ? `${sideBarWidth}px` : 0,
        },
        transition: (theme) =>
          theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        bgcolor: (theme) => theme.palette.common.background3,
      }}
    >
      <MainToolbar />

      <Box
        position="relative"
        sx={{
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            height: toolbarHeight * 2,
            background: (theme) => theme.palette.primary.main,
          },
        }}
      >
        <Stack
          minHeight={containerMinHeight}
          maxWidth={containerWidth}
          mx="auto"
          px={containerPadding}
        >
          <Box zIndex={1}>
            <Stack height={toolbarHeight} direction="row" alignItems="center">
              {typeof headerTitle === 'string' ? (
                <Typography variant="heading" sx={{ color: (theme) => theme.palette.common.white }}>
                  {headerTitle}
                </Typography>
              ) : (
                headerTitle
              )}
            </Stack>
          </Box>

          <Paper sx={{ flex: 'auto', zIndex: 1 }}>
            <Stack
              height={toolbarHeight}
              px={containerPadding}
              direction="row"
              alignItems="center"
              borderBottom={(theme) => `1px solid ${theme.palette.common.outline}`}
            >
              {typeof cardTitle === 'string' ? (
                <Typography variant="heading">{cardTitle}</Typography>
              ) : (
                cardTitle
              )}
            </Stack>

            <Box p={containerPadding}>{children}</Box>
          </Paper>
        </Stack>
      </Box>

      <MainFooter />
    </Box>
  )
}

export default React.memo(MainContainer)
