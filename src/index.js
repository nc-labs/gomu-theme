import 'utils/i18n'
import 'styles/globals.css'
import 'styles/fontawesome/css/all.min.css'

import React, { Suspense, useEffect } from 'react'

import { AUTH_ROUTES } from 'layouts/AuthLayout/routes'
import { MAIN_ROUTES } from 'layouts/MainLayout/routes'
import ReactDOM from 'react-dom'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { DefaultThemeProvider } from 'themes'
import { lazyFactoryPreload } from 'utils/lazy'

const Routes = () => useRoutes([AUTH_ROUTES, MAIN_ROUTES])

const App = () => {
  useEffect(() => {
    lazyFactoryPreload()
  }, [])

  return (
    <React.StrictMode>
      <DefaultThemeProvider>
        <BrowserRouter>
          <Suspense fallback={<></>}>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </DefaultThemeProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
