const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    app: './js/index.js',
  },
  output: {
    path: __dirname + "/public/dist",
    filename: '[name].js',
    publicPath: __dirname,
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env'],
        ],
      },
      exclude: ['/node_modules'],
    }],
  },
  plugins: [],
  optimization: {},
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.css'],
  },
};
