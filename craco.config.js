const path = require('path')

const jsconfig = require('./jsconfig.json')

const paths = jsconfig.compilerOptions.paths
const alias = {}

Object.keys(paths).forEach((key) => {
  const pathName = key.replace('*', '')
  const pathValue = paths[key][0].replace('*', '')

  alias[pathName] = path.resolve(__dirname, pathValue)
})

module.exports = {
  webpack: { alias },
}
