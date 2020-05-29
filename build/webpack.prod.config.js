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
        test:/\.(scss|sass)$/,
        exclude: /node_modules/,
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