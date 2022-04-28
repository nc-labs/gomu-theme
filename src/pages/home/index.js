import { ROUTE_PATHS } from 'routes/constants'
import { createPage } from 'routes/helpers'

const HomePage = createPage(() => import('./Home'), {
  path: ROUTE_PATHS.HOME_PAGE,
  translation: 'home',
  icon: 'home',
})

export default HomePage
