import 'utils/i18n'
import 'styles/globals.scss'

import React, { Suspense, useEffect } from 'react'

import { minutesToMilliseconds, secondsToMilliseconds } from 'date-fns'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'routes/routeConfigs'
import { DefaultThemeProvider } from 'themes'
import { lazyFactoryPreload } from 'utils/lazy'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: minutesToMilliseconds(15),
      cacheTime: minutesToMilliseconds(15),
      refetchInterval: secondsToMilliseconds(5),
      refetchOnWindowFocus: true,
    },
  },
})

const App = () => {
  useEffect(() => {
    lazyFactoryPreload()
  }, [])

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <DefaultThemeProvider>
          <BrowserRouter>
            <Suspense fallback={<></>}>
              <Routes />
            </Suspense>
          </BrowserRouter>
        </DefaultThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
