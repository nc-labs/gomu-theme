import React, { Suspense } from 'react'

import { useRoutes, BrowserRouter } from 'react-router-dom'

import { routes } from './configs'

const Routes = () => useRoutes(routes)

export const RouteProvider = () => (
  <BrowserRouter>
    <Suspense fallback={<></>}>
      <Routes />
    </Suspense>
  </BrowserRouter>
)
