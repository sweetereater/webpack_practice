import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./buildWebpackConfig";

function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { isDev, paths} = options;
  
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    !isDev && new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ]
}

export default buildPlugins;