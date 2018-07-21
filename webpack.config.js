const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/app'),

  entry: './app.js',

  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },

      {
        test: /\.js$/,
        exclude: /(node_mdules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-es2015'].map(require.resolve),
        },
      },
      {
        test: /assets\*$/,
        loader: 'file-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          { loader: 'ts-loader', options: { transpileOnly: true } },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // favicon: 'favicon.ico',
      template: path.join(__dirname, '/app/pug/index.pug'),
      title: 'Page Title',
    }),
  ],
};
