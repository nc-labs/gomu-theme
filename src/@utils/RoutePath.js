import { Adjust } from '@mui/icons-material'
// import history from './history'
import lazy from './lazy'

class RoutePath {
  constructor(pathname) {
    this.pathname = `/${pathname}`.replace('//', '/')
  }

  // navigate = (state) => {
  //   history.push(this.pathname, state)
  // }

  createRoute = (factory) => {
    const Component = lazy(factory)
    return {
      path: this.pathname,
      element: <Component />,
    }
  }

  createNavigator = (name, icon = <Adjust />) => ({
    type: 'item',
    name,
    icon,
    pathname: this.pathname,
  })
}

export default RoutePath
