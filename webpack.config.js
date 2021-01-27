const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, './client/src');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: SRC_DIR,
      },
      {
        test: /\.css?/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
