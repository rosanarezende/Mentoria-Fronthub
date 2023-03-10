const FronthubWebpackPlugin = require('@resultadosdigitais/front-hub/react/webpack-plugin')
const { addWebpackPlugin, override } = require('customize-cra')

module.exports = override(
  addWebpackPlugin(
    new FronthubWebpackPlugin({ dev: process.env.NODE_ENV !== 'production' }),
  ),
)
