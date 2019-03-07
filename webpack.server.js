const path = require ('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // Inform webpack to build a bundle for node.js
  target: 'node',
  // root file of our server application
  entry: './src/index.js',
  // tell webpack where to put the output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};

module.exports = merge(baseConfig, config);