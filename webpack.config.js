const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const now = Date.now();

if (process.env.NODE_ENV === 'production') {
  fs.appendFileSync(
    'logs/build.log',
    `
        Nodejs Process version: ${process.version}
        Current directory: ${__dirname}
        Node ENV: ${process.env.NODE_ENV}
        Build excute at: ${new Date()}
    `
  );
}

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  // Webpack의 출력물에서 디버깅을 하기위해 소스 맵을 허용합니다.
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    filename: 'bundle-[name]-[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ['ts-loader', 'babel-loader?cacheDirectory'],
        exclude: /node_modules/,
      },
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[contenthash].[ext]',
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js(x?)$/,
        loader: 'source-map-loader',
      },
    ],
  },
  devServer: {
    writeToDisk: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: process.env.port || 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.ProgressPlugin({
      handler: function (percentage, msg, ...args) {
        fs.appendFileSync(
          `logs/build.${now}.log`,
          `[${percentage * 100}%]\n${msg}\n\n`
        );
      },
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      cache: true,
    }),
  ],
};
