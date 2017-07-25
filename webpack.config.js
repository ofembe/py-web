var path = require('path')
var webpack = require('webpack')

module.exports = {
  //Entry point
  entry: "./src/js/main.js",
  //Output
  output: {
    path: path.join(__dirname, './dist/js'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /[node_modules]/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!style-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};
