import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./buildWebpackConfig";

function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const { isDev, paths} = options;

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
  
  return plugins
}

export default buildPlugins;
