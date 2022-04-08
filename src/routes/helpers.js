import lazy from 'utils/lazy'

export const generatePageConfigs = (factory, { path, translation, icon }) => {
  const Element = lazy(factory)

  return {
    route: {
      path,
      element: <Element />,
    },
    navigator: { translation, icon, url: path },
  }
}
