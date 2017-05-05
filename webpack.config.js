/*
    Set up Webpack
    - Entry point: entry file where the bundling process starts.
    - Output: where bundled code is saved.
    - Loaders: specifies the transformations that are applied on a file in the app.
               In this case, since we use react and ES6 with need to specify .js and .jsx
               so the babel-loader can transpile every file that ends with either those extensions
               and excludes the node_modules.
               For more information about loaders go to: https://webpack.github.io/docs/list-of-loaders.html
*/
const path = require('path')
module.exports = {
  entry: './app/main.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  watch: true,
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/ },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/ }
    ]
  }
}
