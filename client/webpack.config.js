// Modules
const webpack = require('webpack');
const path = require('path');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Shortcuts
const bundlePath = path.resolve(__dirname, 'lib');


// WEBPACK MODULE
module.exports = {
  entry: './src/index.js',

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/template.html' }),
    new webpack.HotModuleReplacementPlugin() // HMR
  ],

  output: {
    path: bundlePath,
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    hot: true,
    contentBase: bundlePath,
    publicPath: '/'
  }
}
