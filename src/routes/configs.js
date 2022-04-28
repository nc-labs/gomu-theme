import { AuthLayout, MainLayout } from 'layouts'
import AboutPage from 'pages/about'
import LoginPage from 'pages/auth/login'
import RegisterPage from 'pages/auth/register'
import BookDetailsPage from 'pages/books/details'
import BookListPage from 'pages/books/list'
import HomePage from 'pages/home'

import { getRouteConfigs, getNavigatorConfigs } from './helpers'

export const navigator = {
  nav_group_1: getNavigatorConfigs([HomePage, AboutPage, BookListPage]),
}

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