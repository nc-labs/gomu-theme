import React, { useState, useContext, useLayoutEffect } from 'react'

import { Box, Paper, Stack } from '@mui/material'
import { Typography } from 'components'

import MAIN_LAYOUT_CONFIGS from '../configs'

const { toolbarHeight, headerHeight, footerHeight, containerPadding, containerWidth } =
  MAIN_LAYOUT_CONFIGS
const containerMinHeight = `calc(100vh - ${headerHeight + footerHeight}px)`

const MainContainerContext = React.createContext({})

const MainContainer = React.memo(({ children }) => {
  const [headerTitle, setHeaderTitle] = useState('')
  const [cardTitle, setCardTitle] = useState('')
  const [cardContent, setCardContent] = useState('')

  return (
    <Stack position="relative" minHeight={containerMinHeight} px={containerPadding}>
      <Box
        position="absolute"
        top={0}
        right={0}
        left={0}
        height={toolbarHeight * 2}
        bgcolor="primary.main"
      />

      <Box maxWidth={containerWidth} width="100%" mx="auto" zIndex={1}>
        <MainContainerContext.Provider value={{ setHeaderTitle, setCardTitle, setCardContent }}>
          <Stack minHeight={containerMinHeight}>
            <Stack
              height={toolbarHeight}
              direction="row"
              alignItems="center"
              bgcolor="primary.main"
            >
              {typeof headerTitle === 'string' ? (
                <Typography variant="heading" className="text-white">
                  {headerTitle}
                </Typography>
              ) : (
                headerTitle
              )}
            </Stack>

            <Paper className="flex-auto">
              {cardTitle}
              {cardContent}
              {children}
            </Paper>
          </Stack>
        </MainContainerContext.Provider>
      </Box>
    </Stack>
  )
})

MainContainer.Header = React.memo(({ children }) => {
  const { setHeaderTitle } = useContext(MainContainerContext)

  useLayoutEffect(() => {
    setHeaderTitle(children)

    return () => setHeaderTitle('')
  }, [children])

  return <></>
})

MainContainer.CardTitle = React.memo(({ children }) => {
  const { setCardTitle } = useContext(MainContainerContext)

  useLayoutEffect(() => {
    setCardTitle(
      <Stack
        height={toolbarHeight}
        px={containerPadding}
        direction="row"
        alignItems="center"
        borderBottom={(theme) => `1px solid ${theme.palette.divider}`}
      >
        {typeof children === 'string' ? (
          <Typography variant="heading">{children}</Typography>
        ) : (
          children
        )}
      </Stack>
    )

    return () => setCardTitle('')
  }, [children])

  return <></>
})

MainContainer.CardContent = React.memo(({ children, ...props }) => {
  const { setCardContent } = useContext(MainContainerContext)

  useLayoutEffect(() => {
    setCardContent(
      <Box p={containerPadding} {...props}>
        {children}
      </Box>
    )

    return () => setCardContent('')
  }, [children])

  return <></>
})

export default MainContainer
