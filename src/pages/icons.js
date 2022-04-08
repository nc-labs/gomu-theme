import React from 'react'

import { Stack } from '@mui/material'
import { Typography } from 'components/atoms'
import { useMainLayoutConfigs } from 'layouts/MainLayout/context'
import Svg from 'svg'

const Icons = () => {
  useMainLayoutConfigs({
    headerTitle: 'Icons Page',
    cardTitle: 'Icons Card',
  })

  return (
    <Stack flexDirection="row" flexWrap="wrap">
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
  )
}

export default React.memo(Icons)
