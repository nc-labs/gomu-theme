/**
 * @type {INavGroups}
 */
const NAV_GOUPS = {
  nav_group_1: [
    {
      icon: 'house-chimney',
      translation: 'home',
      url: '/',
    },
    {
      icon: 'circle-info',
      translation: 'about',
      url: '/about',
    },
  ],
}

export default NAV_GOUPS

/**
 * @typedef {{[key: string]: (import('./libs/MainNavItem').INavItem | import('./libs/MainNavMenu').INavMenu)[]}} INavGroups
 */
