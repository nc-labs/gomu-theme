import 'utils/i18n'
import 'styles/globals.css'
import 'styles/fontawesome/css/all.min.css'

import React, { Suspense, useEffect } from 'react'

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
