var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    './src/index.js',
  ],
  module: {
    loaders: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'react-hot!babel' },
    { test: /\.css$/, exclude: /node_modules/, loader: 'style!css' }
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
