import 'locales'
import 'styles/globals.scss'

import React from 'react'

import ReactDOM from 'react-dom'
import { RouteProvider } from 'routes'
import QueryProvider from 'templates/QueryProvider'
import { SnackProvider } from 'templates/SnackBar'
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
            <RouteProvider />
          </SnackProvider>
        </DefaultThemeProvider>
      </QueryProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
reportWebVitals()
