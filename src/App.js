import { memo, Suspense } from 'react'
import routeConfigs from '@configs/routes'
import history from '@utils/history'
import { usePreload } from '@utils/lazy'
import { useRoutes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'

const Routes = () => useRoutes(routeConfigs)

const App = () => {
  usePreload()

  return (
    <HistoryRouter history={history}>
      <Suspense fallback={<></>}>
        <Routes />
      </Suspense>
    </HistoryRouter>
  )
}

export default memo(App)
