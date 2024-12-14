import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./buildWebpackConfig";
import { ModuleOptions } from "webpack";

function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  
  const tsxLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  return [
    tsxLoader,
    cssLoader
  ]
}

export default buildLoaders;
