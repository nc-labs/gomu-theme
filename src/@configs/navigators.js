import { Dashboard, Info, Store, Category, Group } from '@mui/icons-material'
import ROUTE_PATHS from './routePaths'

const navigators = [
  {
    type: 'group',
    name: 'Common page',
    children: [
      ROUTE_PATHS.HOME.createNavigator('Dashboard', <Dashboard />),
      ROUTE_PATHS.ABOUT.createNavigator('About', <Info />),
      {
        type: 'menu',
        name: 'Ecomerce',
        icon: <Store />,
        children: [
          ROUTE_PATHS.PRODUCTS.createNavigator('Products', <Category />),
          ROUTE_PATHS.CUSTOMERS.createNavigator('Customers', <Group />),
        ],
      },
    ],
  },
]

export default navigators
