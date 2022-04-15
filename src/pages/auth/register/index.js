import { ROUTE_PATHS } from 'routes/constants'
import { generatePageConfigs } from 'routes/helpers'

const RegisterPage = generatePageConfigs(() => import('./Register'), {
  path: ROUTE_PATHS.REGISTER_PAGE,
})

export default RegisterPage
