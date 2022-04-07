import React, { Suspense } from 'react'

import { CircularProgress, Backdrop } from '@mui/material'

const lazyFactories = []

const factoryWithMinTime =
  (factory, minTime = 1000) =>
  () =>
    Promise.all([factory(), new Promise((resolve) => setTimeout(resolve, minTime))]).then(
      ([moduleExports]) => moduleExports
    )

const lazy = (factory) => {
  const Component = React.lazy(factoryWithMinTime(factory))
  let PreloadComponent

  const LazyComponent = (props) => {
    const Render = PreloadComponent || Component

    return (
      <Suspense
        fallback={
          <Backdrop open sx={{ position: 'absolute' }}>
            <CircularProgress />
          </Backdrop>
        }
      >
        <Render {...props} />
      </Suspense>
    )
  }

  lazyFactories.push(() =>
    factory().then((res) => {
      PreloadComponent = res.default
    })
  )

  return LazyComponent
}

export const lazyFactoryPreload = async () => {
  try {
    await Promise.all(lazyFactories.map((preload) => preload()))
  } catch {}
}

export default lazy
