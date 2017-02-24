var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './static');
var APP_DIR = path.resolve(__dirname, './components');
var config = {
  entry:  './components/routes.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
  	loaders : [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};

module.exports = config;
