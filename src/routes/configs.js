import { AuthLayout, MainLayout } from 'layouts'
import AboutPage from 'pages/about'
import LoginPage from 'pages/auth/login'
import RegisterPage from 'pages/auth/register'
import { BookListPage, BookDetailsPage } from 'pages/books'
import HomePage from 'pages/home'

import { getRouteConfigs, getNavigatorConfigs } from './helpers'

export const navigator = getNavigatorConfigs([HomePage, AboutPage, BookListPage])

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: getRouteConfigs([HomePage, AboutPage, BookListPage, BookDetailsPage]),
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: getRouteConfigs([LoginPage, RegisterPage]),
  },
]
