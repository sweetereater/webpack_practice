import { Configuration, DefinePlugin } from "webpack";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./buildWebpackConfig";

function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const { isDev, paths, platform, useWebpackBundleAnalyzer } = options;

  // Общие плагины
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform)
    })
  ]

  // Плагины только для разработки
  if(isDev) {
    plugins.push(
      new ForkTsCheckerPlugin()
    )
  }

  // Плагины для прода
  if (!isDev) {
    plugins.push(
      !isDev && new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      })
    )
  }

  
  if (useWebpackBundleAnalyzer) {
    plugins.push(
      new BundleAnalyzerPlugin(),
    )
  }
  
  return plugins
}

export default buildPlugins;
