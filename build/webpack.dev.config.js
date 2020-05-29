"use strict"
const path = require('path')
const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: '../dist',
    hot: true
  },
  module:{
    rules:[
      {
        test:/\.(scss|sass)$/,
        exclude: /node_modules/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              modules: true,
            }
          },
          {
            loader:'sass-loader',
            options:{
              implementation: require('dart-sass'),
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new HardSourceWebpackPlugin()
  ]
}