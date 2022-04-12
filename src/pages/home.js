import React from 'react'

import { Typography } from '@mui/material'
import MainContainer from 'layouts/MainLayout/libs/MainContainer'

const Home = () => (
  <>
    <MainContainer.Header>Home Page</MainContainer.Header>
    <MainContainer.CardContent>
      <Typography>Home</Typography>
    </MainContainer.CardContent>
  </>
)

export default React.memo(Home)
