import { ROUTE_PATHS } from 'routes/constants'
import { generatePageConfigs } from 'routes/helpers'

const AboutPage = generatePageConfigs(() => import('./About'), {
  path: ROUTE_PATHS.ABOUT_PAGE,
  translation: 'about',
  icon: 'info',
})

export default AboutPage
