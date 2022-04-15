import { ROUTE_PATHS } from 'routes/constants'
import { generatePageConfigs } from 'routes/helpers'

const HomePage = generatePageConfigs(() => import('./Home'), {
  path: ROUTE_PATHS.HOME_PAGE,
  translation: 'home',
  icon: 'home',
})

export default HomePage
