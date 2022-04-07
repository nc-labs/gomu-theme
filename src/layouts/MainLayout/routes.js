import MainLayout from 'layouts/MainLayout'
import lazy from 'utils/lazy'

const AboutPage = lazy(() => import('pages/about'))
const HomePage = lazy(() => import('pages/home'))

const namespace = ''

export const MAIN_PATH = {
  HOME_PAGE: `${namespace}/`,
  ABOUT_PAGE: `${namespace}/about`,
}

export const MAIN_ROUTES = {
  path: namespace || '/',
  element: <MainLayout />,
  children: [
    {
      path: MAIN_PATH.HOME_PAGE,
      element: <HomePage />,
    },
    {
      path: MAIN_PATH.ABOUT_PAGE,
      element: <AboutPage />,
    },
  ],
}
