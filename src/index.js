import 'i18n'
import 'styles/globals.scss'

import React, { Suspense, useEffect } from 'react'

import DevTools from 'modules/DevTools'
import QueryProvider from 'modules/QueryProvider'
import { SnackProvider } from 'modules/SnackBar'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'routes/routeConfigs'
import { DefaultThemeProvider } from 'themes'
import { lazyFactoryPreload } from 'utils/lazy'

const App = () => {
  useEffect(() => {
    lazyFactoryPreload()
  }, [])

  return (
    <React.StrictMode>
      <QueryProvider>
        <DefaultThemeProvider>
          <SnackProvider>
            <DevTools />

            <BrowserRouter>
              <Suspense fallback={<></>}>
                <Routes />
              </Suspense>
            </BrowserRouter>
          </SnackProvider>
        </DefaultThemeProvider>
      </QueryProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
