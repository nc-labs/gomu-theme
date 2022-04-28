import 'i18n'
import 'styles/globals.scss'

import React from 'react'

import DevTools from 'modules/DevTools'
import QueryProvider from 'modules/QueryProvider'
import { SnackProvider } from 'modules/SnackBar'
import ReactDOM from 'react-dom'
import { RouteProvider } from 'routes'
import { DefaultThemeProvider } from 'themes'
import { usePreload } from 'utils/lazy'

import reportWebVitals from './reportWebVitals'

const App = () => {
  usePreload()

  return (
    <React.StrictMode>
      <QueryProvider>
        <DefaultThemeProvider>
          <SnackProvider>
            <DevTools />
            <RouteProvider />
          </SnackProvider>
        </DefaultThemeProvider>
      </QueryProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
reportWebVitals()
