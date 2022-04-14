import React from 'react'

import MainContainer from 'layouts/MainLayout/libs/MainContainer'
import SvgIconTool from 'templates/SvgIconTool'

const SvgIcon = () => (
  <>
    <MainContainer.Header>SvgIcon Page</MainContainer.Header>
    <MainContainer.CardContent>
      <SvgIconTool />
    </MainContainer.CardContent>
  </>
)

export default React.memo(SvgIcon)
