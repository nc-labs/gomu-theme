import { ROUTE_PATHS } from 'routes/constants'
import { createPage } from 'routes/helpers'

const LoginPage = createPage(() => import('./Login'), {
  path: ROUTE_PATHS.LOGIN_PAGE,
})

export default LoginPage
