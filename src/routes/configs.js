import { AuthLayout, MainLayout } from 'layouts'
import AboutPage from 'pages/about'
import LoginPage from 'pages/auth/login'
import RegisterPage from 'pages/auth/register'
import HomePage from 'pages/home'

import { getRouteConfigs, getNavigatorConfigs } from './helpers'

export const navigator = getNavigatorConfigs([HomePage, AboutPage])

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: getRouteConfigs([HomePage, AboutPage]),
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: getRouteConfigs([LoginPage, RegisterPage]),
  },
]
