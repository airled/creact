const path = require('path');

module.exports = {
  entry: [
    './src/assets/js/components/index.js',
    './src/assets/js/script.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' }
    ]
  }
}
