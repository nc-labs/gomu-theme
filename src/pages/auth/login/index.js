import { ROUTE_PATHS } from 'routes/constants'
import { generatePageConfigs } from 'routes/helpers'

const LoginPage = generatePageConfigs(() => import('./Login'), {
  path: ROUTE_PATHS.LOGIN_PAGE,
})

export default LoginPage
