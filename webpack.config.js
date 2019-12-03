const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDir = path.join(__dirname, 'dist');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
    ['app.worker']: path.join(__dirname, 'src', 'app.worker.ts')
  },
  output: {
    path: outputDir,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      }
    ]
  },
  devServer: {
    contentBase: outputDir,
    compress: true,
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      inject: false
    })
  ]
};
