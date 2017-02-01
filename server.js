const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const path= require('path');
const PORT = 3000; 

const DEV = false;

if(dev){
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy: {
      '/api*': {
        target: 'http://localhost:3001'
      }
    }
    
  })
  .listen(PORT, '0.0.0.0', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:3000');
  });
}