import 'modules/i18n'

import React from 'react'

import { AUTH_ROUTES } from 'layouts/AuthLayout/routes'
import { MAIN_ROUTES } from 'layouts/MainLayout/routes'
import { ReduxProvider } from 'modules/redux'
import ReactDOM from 'react-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { DefaultThemeProvider } from 'themes'

const Routes = () => useRoutes([AUTH_ROUTES, MAIN_ROUTES])

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <DefaultThemeProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </DefaultThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
