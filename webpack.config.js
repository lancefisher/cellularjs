/* eslint-disable */
var path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    filename: 'cellular.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  }
};
