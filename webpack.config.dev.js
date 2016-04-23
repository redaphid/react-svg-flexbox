var autoprefixer = require('autoprefixer');
var path         = require('path');
var webpack      = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.json$/,
      loader: "json-loader"
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader',
      include: path.join(__dirname, 'src')
    }]
  },
  postcss: function () {
    return [autoprefixer];
  }
};
