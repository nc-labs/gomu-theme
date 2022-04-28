import { Icon } from 'modules/components'
import lazy from 'utils/lazy'

/**
 *
 * @param {() => Promise<any>} factory - lazy import function
 * @param {object} options
 * @param {string} options.path - route path
 * @param {string} [options.translation] - translation code in sidebar
 * @param {TIconNames} [options.icon] - icon name shown in sidebar
 * @returns
 */
export const generatePageConfigs = (factory, { path, translation, icon }) => {
  const Element = lazy(factory)

  return {
    route: {
      path,
      element: <Element />,
    },
    navigator: { translation, icon: <Icon name={icon} />, url: path },
  }
}

export const getRouteConfigs = (configs) =>
  Array.isArray(configs)
    ? configs.map((page) => page?.route || undefined).filter((route) => route)
    : []

export const getNavigatorConfigs = (configs) =>
  Array.isArray(configs)
    ? configs.map((page) => page?.navigator || undefined).filter((navigator) => navigator)
    : []

/**
 * @typedef {import('modules/components/libs/Icon').TIconNames} TIconNames
 */
