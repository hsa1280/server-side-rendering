const path = require ('path');

module.exports = {
  // root file of our server application
  entry: './src/client/client.js',
  // tell webpack where to put the output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  // tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env', 
              { 
                targets: { 
                  browsers: [ 'last 2 versions' ]
                }
              }
            ]
          ]
        }
      }
    ]
  }
};