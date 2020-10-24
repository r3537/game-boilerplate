// Webpack - Configuration (Production)
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

// Module Exports
module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'bundle.min.js'
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    // Manifest
    new ManifestPlugin(),
    // Images
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production',
      test: ('img'),
      optipng: {
        optimizationLevel: 9,
      },
      gifsicle: {
        optimizationLevel: 9,
      },
    }),
    // Banner
    new webpack.BannerPlugin({
      banner: ' version 0.1.0 - © R3537 2020. All Rights reserved. https://r3537.github.com/ - Released under proprietary EULA',
      raw: false,
      entryOnly: true,
    }),
  ]
});
