const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader','sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // new cleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
};
