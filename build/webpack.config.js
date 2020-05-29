const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')
module.exports = function(env,argv){
  
  const config = env.development ? devConfig : prodConfig;
  return merge(baseConfig,config)
  
}