import { ROUTE_PATHS } from 'routes/constants'
import { createPage } from 'routes/helpers'

const AboutPage = createPage(() => import('./About'), {
  path: ROUTE_PATHS.ABOUT_PAGE,
  translation: 'about',
  icon: 'info',
})

export default AboutPage
