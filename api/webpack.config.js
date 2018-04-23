const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
    
  },
  
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.template.html'
    })
  ],

  module: {
     rules: [
      {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
      },
      { test: /\.jpg$/, loader: 'url-loader' }
    ]
  },
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};