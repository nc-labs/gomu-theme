import React from 'react'
import '@modules/i18n'

import { AUTH_ROUTES } from '@layouts/AuthLayout/routes'
import { MAIN_ROUTES } from '@layouts/MainLayout/routes'
import { ReduxProvider } from '@modules/redux'
import ReactDOM from 'react-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'

const Routes = () => useRoutes([AUTH_ROUTES, MAIN_ROUTES])

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
