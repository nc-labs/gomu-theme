import LazyComponent from 'components/LazyComponent'

const AuthLayout = LazyComponent(() => import('layouts/AuthLayout'))
const LoginPage = LazyComponent(() => import('pages/auth/login'))
const RegisterPage = LazyComponent(() => import('pages/auth/register'))

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
