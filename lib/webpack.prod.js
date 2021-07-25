/* eslint-disable import/no-extraneous-dependencies */
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const prodConfig = {
  mode: "production",
  plugins: [
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        vendors: {
          name: "vendors",
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          // test: /(react|react-dom)/,
          priority: -10,
          reuseExistingChunk: true,
        },
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2,
        },
      },
    },
  },
};

module.exports = merge(baseConfig, prodConfig);
