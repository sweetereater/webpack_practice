import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { BuildOptions } from "./buildWebpackConfig";

function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const { isDev, paths, platform, useWebpackBundleAnalyzer } = options;

  // Общие плагины
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      favicon: path.resolve(paths.public, 'icon.ico'),
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
    plugins.push(
      new ReactRefreshWebpackPlugin()
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
    plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(paths.public, 'locales'), to: path.resolve(paths.output, 'locales') },
        ],
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
