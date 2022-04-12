import React from 'react'

import { Typography } from '@mui/material'
import MainContainer from 'layouts/MainLayout/libs/MainContainer'

const About = () => (
  <>
    <MainContainer.Header>About Page</MainContainer.Header>
    <MainContainer.CardContent>
      <Typography>About</Typography>
    </MainContainer.CardContent>
  </>
)

export default React.memo(About)
