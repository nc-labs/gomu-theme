import { memo, Suspense } from 'react'
import routeConfigs from '@configs/routes'
import QueryProvider from '@templates/QueryProvider'
import { SnackProvider } from '@templates/SnackBar'
import history from '@utils/history'
import { usePreload } from '@utils/lazy'
import { useRoutes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'

const Routes = () => useRoutes(routeConfigs)

const App = () => {
  usePreload()

  return (
    <SnackProvider>
      <QueryProvider>
        <HistoryRouter history={history}>
          <Suspense fallback={<></>}>
            <Routes />
          </Suspense>
        </HistoryRouter>
      </QueryProvider>
    </SnackProvider>
  )
}

export default memo(App)
