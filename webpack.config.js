const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-synchronizable-shell-plugin');
const transpileConfig = require('./transpile-config');

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new WebpackShellPlugin({
      onBuildStart:{
        scripts: transpileConfig,
        blocking: true,
        parallel: false
      }, 
      onBuildEnd:{
        scripts: ['echo "Webpack End"'],
        blocking: false,
        parallel: true
      }
    })

  ]
  
};