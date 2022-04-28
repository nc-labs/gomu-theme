import { ROUTE_PATHS } from 'routes/constants'
import { createPage } from 'routes/helpers'

const RegisterPage = createPage(() => import('./Register'), {
  path: ROUTE_PATHS.REGISTER_PAGE,
})

export default RegisterPage
