const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
    filename: 'bundle.js',
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
      // 모든 '.js' 출력 파일은 'source-map-loader'에서 다시 처리한 소스 맵이 있습니다.
      {
        enforce: 'pre',
        test: /\.js(x?)$/,
        loader: 'source-map-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
  // 경로가 다음 중 하나와 일치하는 모듈을 가져올 때, 해당 전역 변수가 있다고 가정하고 사용합니다.
  // 브라우저가 빌드간에 라이브러리를 캐시 할 수 있도록 모든 의존성을 묶지 않아도 되기 때문에 중요합니다.
  // externals: {
  //     "$": "jQuery"
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html',
      cache: true,
    }),
  ],
};
