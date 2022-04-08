import AuthLayout from 'layouts/AuthLayout/AuthLayout'
import MainLayout from 'layouts/MainLayout'
import { useRoutes } from 'react-router-dom'
import Svg from 'svg'

import { generatePageConfigs } from './helpers'

export const PATHS = {
  HOME_PAGE: '/',
  ABOUT_PAGE: '/about',
  ICONS_PAGE: '/icons',
  LIST_BOOKS: '/books',
  // auth paths
  LOGIN_PAGE: '/auth/login',
  REGISTER_PAGE: '/auth/register',
}

// MainLayout
const homePage = generatePageConfigs(() => import('pages/home'), {
  path: PATHS.HOME_PAGE,
  translation: 'home',
  icon: <Svg.Home />,
})

const aboutPage = generatePageConfigs(() => import('pages/about'), {
  path: PATHS.ABOUT_PAGE,
  translation: 'about',
  icon: <Svg.Info />,
})

const iconsPage = generatePageConfigs(() => import('pages/icons'), {
  path: PATHS.ICONS_PAGE,
  translation: 'about',
  icon: <Svg.Info />,
})

const listBookPage = generatePageConfigs(() => import('pages/books'), {
  path: PATHS.LIST_BOOKS,
  translation: 'list_book',
  icon: <Svg.Books />,
})

// AuthLayout
const loginPage = generatePageConfigs(() => import('pages/auth/login'), {
  path: PATHS.LOGIN_PAGE,
})

const registerPage = generatePageConfigs(() => import('pages/auth/register'), {
  path: PATHS.REGISTER_PAGE,
})

export const navigator = {
  nav_group_1: [homePage, aboutPage, listBookPage].map((page) => page.navigator),
  development: [iconsPage].map((page) => page.navigator),
}

export const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [homePage, aboutPage, iconsPage, listBookPage].map((page) => page.route),
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [loginPage, registerPage].map((page) => page.route),
    },
  ])
