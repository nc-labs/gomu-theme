import { Icon } from 'components'
import AuthLayout from 'layouts/AuthLayout'
import MainLayout from 'layouts/MainLayout'
import { useRoutes } from 'react-router-dom'

import { generatePageConfigs } from './helpers'

export const PATHS = {
  HOME_PAGE: '/',
  ABOUT_PAGE: '/about',
  SVG_ICON_PAGE: '/svg-icons',
  ICOMOON_PAGE: '/icomoon',
  LIST_BOOKS: '/books',
  // auth paths
  LOGIN_PAGE: '/auth/login',
  REGISTER_PAGE: '/auth/register',
}

// MainLayout
const homePage = generatePageConfigs(() => import('pages/home'), {
  path: PATHS.HOME_PAGE,
  translation: 'home',
  icon: <Icon name="home" />,
})

const aboutPage = generatePageConfigs(() => import('pages/about'), {
  path: PATHS.ABOUT_PAGE,
  translation: 'about',
  icon: <Icon name="info" />,
})

const listBookPage = generatePageConfigs(() => import('pages/books'), {
  path: PATHS.LIST_BOOKS,
  translation: 'list_book',
  icon: <Icon name="info" />,
})

// AuthLayout
const loginPage = generatePageConfigs(() => import('pages/auth/login'), {
  path: PATHS.LOGIN_PAGE,
})

const registerPage = generatePageConfigs(() => import('pages/auth/register'), {
  path: PATHS.REGISTER_PAGE,
})

// Dev only

const IconPage = generatePageConfigs(() => import('pages/svg-icons'), {
  path: PATHS.SVG_ICON_PAGE,
  translation: 'svg-icons',
  icon: <Icon name="info" />,
})

export const navigator = {
  nav_group_1: [homePage, aboutPage, listBookPage].map((page) => page.navigator),
  development: [IconPage].map((page) => page.navigator),
}

export const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [homePage, aboutPage, IconPage, listBookPage].map((page) => page.route),
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [loginPage, registerPage].map((page) => page.route),
    },
  ])
