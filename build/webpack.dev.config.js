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
        test:/\.(sa|sc|c)ss$/,
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
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                // resolve方法第二个参数为scss配置文件地址，如果有多个，就进行依次添加即可
                resolve('../src/assets/styles/mixin.scss'),
              ],
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