"use strict"
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  mode: 'production',
  module:{
    rules:[
      {
        test:/\.(sa|sc|c)ss$/,
        use:[
          {
            loader:MiniCssExtractPlugin.loader
          },
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename:'css/[name].[contenthash:8].css',
      chunkFilename:'css/[name].[contenthash:8].css'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: resolve('../public'),
        to: resolve('../dist')
      }]
    })
  ]

}