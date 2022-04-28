import { Icon } from 'components'
import lazy from 'utils/lazy'

/** @type {TcreatePage} */
export const createPage = (factory, { path, translation, icon }) => {
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

/** @typedef {import('components/libs/Icon').TIconNames} TIconNames */

/**
 * @typedef TPageOptions
 * @type {object}
 * @property {string} path
 * @property {string} [translation]
 * @property {TIconNames} [icon]
 */

/**
 * @callback TcreatePage
 * @param {() => Promise<any>} factory
 * @param {TPageOptions} options
 */
