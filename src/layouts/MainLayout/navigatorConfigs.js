import Svg from 'svg'

/**
 * @type {INavGroups}
 */
const NAV_GOUPS = {
  nav_group_1: [
    {
      icon: <Svg.Home />,
      translation: 'home',
      items: [
        {
          icon: <Svg.Home />,
          translation: 'home',
          url: '/',
        },
        {
          icon: <Svg.Info />,
          translation: 'about',
          url: '/about',
        },
      ],
    },
  ],
}

export default NAV_GOUPS

/**
 * @typedef {{[key: string]: (import('./libs/MainNavItem').INavItem | import('./libs/MainNavMenu').INavMenu)[]}} INavGroups
 */
