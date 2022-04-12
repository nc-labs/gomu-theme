import React from 'react'

import { Stack } from '@mui/material'
import { Typography } from 'components'
import MainContainer from 'layouts/MainLayout/libs/MainContainer'
import Svg from 'svg'

const Icons = () => (
  <>
    <MainContainer.Header>Icons Page</MainContainer.Header>
    <MainContainer.CardContent>
      <Stack direction="row" flexWrap="wrap">
        {Object.keys(Svg)
          .sort()
          .map((key, index) => {
            const Icon = Svg[key]
            return (
              <Stack key={index} spacing={3} width={160} height={120} alignItems="center">
                <Icon sx={{ height: 32, width: 32 }} />
                <Typography>{`<Svg.${key} />`}</Typography>
              </Stack>
            )
          })}
      </Stack>
    </MainContainer.CardContent>
  </>
)

export default React.memo(Icons)
