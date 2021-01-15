var path = require('path')
var webpack = require('webpack')
var SRC_DIR = path.join(__dirname, './client/src')

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    path: path.join(__dirname, './public/dist'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: SRC_DIR,
        options: {
          presets: ['@babel/react', '@babel/preset-env']
        }
      },
      {
        test: /\.css?/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}