import { MainLayout } from '@layouts'
import ROUTE_PATHS from './routePaths'

const routeConfigs = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      ROUTE_PATHS.HOME.createRoute(() => import('@pages/HomePage')),
      ROUTE_PATHS.ABOUT.createRoute(() => import('@pages/AboutPage')),
      ROUTE_PATHS.CUSTOMERS.createRoute(() => import('@pages/CustomersPage')),
      ROUTE_PATHS.PRODUCTS.createRoute(() => import('@pages/ProductsPage')),
      ROUTE_PATHS.PROFILE.createRoute(() => import('@pages/ProfilePage')),
    ],
  },
]

export default routeConfigs
