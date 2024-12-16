import { Configuration } from "webpack";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./buildWebpackConfig";

function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const { isDev, paths, useWebpackBundleAnalyzer } = options;

  // Общие плагины
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html
    })
  ]

  // Плагины только для разработки
  if(isDev) {
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
