const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [
    // entry point of our app
    './client/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // babel config for CSS files
      {
        test: /\.s?[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                  process.env.NODE_ENV === 'production'
                    ? MiniCssExtractPlugin.loader
                    : 'style-loader',
                  'css-loader',
                ],
      },
      // babel config for transpiling ES6 syntax and react code
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
          }
        }
      },
    ]
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({template: './index.html'})],
  devServer: {
    compress: true,
    port: 8080,
    proxy: {
        '/': 'http://localhost:3000'
    }
  }
  // devtool: 'eval-source-map',
  // mode: 'development',
  // devServer: {
  //   host: 'localhost',
  //   port: '8080',
  //   hot: true,

  //   static: {
  //     // match the output path
  //     directory: path.resolve(__dirname, 'dist'),
  //     // match the output 'publicPath'
  //     publicPath: '/',
  //   },
  //   proxy: {
  //     '/api/**': {
  //       target: 'http://localhost:3000/',
  //       secure: false,
  //     },
  //     '/assets/**': {
  //       target: 'http://localhost:3000/',
  //       secure: false,
  //     },
  //   }
  // }
}