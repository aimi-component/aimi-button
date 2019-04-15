const path = require('path');
const nodeExternals = require('webpack-node-externals');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/AimiButton.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2'
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
  plugins: [
    new cleanWebpackPlugin(),
  ],
  externals: [nodeExternals()]
};
