// Webpack - Configuration (Development)
// Module Imports
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

// Module Exports
module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [{
        // Images
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        include: path.resolve(__dirname, './src/assets/img'),
        use: [{
          loader: 'file-loader',
          options: {
            useRelativePath: true,
          },
        }],
      },
      {
        // JS
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  plugins: [
    // Cleanings
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        './dist',
      ],
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    }),
    // HTML
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
