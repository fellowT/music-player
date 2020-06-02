"use strict"
const HtmlWebpackPlugin = require("html-webpack-plugin")

const path = require("path")

function resolve(dir) {

  return path.join(__dirname, dir)

}
module.exports = {
  entry: resolve('../src/index.tsx'),
  output: {
    path: resolve("../dist"),
    filename: '[name].bundle.js',
    chunkFilename: '[hash].bundle.js'
  },
  resolve:{
    extensions:['.ts','.tsx','.js']
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: resolve('../src/assets/icons'),// 只带自己人玩
        options:{
          symbolId: 'icon-[name]'
        }
      },
      {
        test:/\.(png|jpe?g|gif|svg)(\?.*)?/,
        exclude: resolve('../src/assets/icons'), // 不带icon 玩
        use:{
          loader:'url-loader',
          options:{
            limit:8192,
            fallback:{
              loader:'file-loader',
              options:{
                name:'img/[name].[ext]?v=[hash:8]'
              }
            }
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:4096,
              fallback:{
                loader:'file-loader',
                options:{
                  name:'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:4096,
              fallback:{
                loader:'file-loader',
                options:{
                  name:'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:resolve('../public/index.html')
    })
  ]
}