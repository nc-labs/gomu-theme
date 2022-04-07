import AuthLayout from 'layouts/AuthLayout'
import lazy from 'utils/lazy'

const LoginPage = lazy(() => import('pages/auth/login'))
const RegisterPage = lazy(() => import('pages/auth/register'))

const namespace = '/auth'

export const AUTH_PATH = {
  LOGIN_PAGE: `${namespace}/login`,
  REGISTER_PAGE: `${namespace}/register`,
}

export const AUTH_ROUTES = {
  path: namespace || '/',
  element: <AuthLayout />,
  children: [
    {
      path: AUTH_PATH.LOGIN_PAGE,
      element: <LoginPage />,
    },
    {
      path: AUTH_PATH.REGISTER_PAGE,
      element: <RegisterPage />,
    },
  ],
}
