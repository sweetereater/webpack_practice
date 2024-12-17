import { ModuleOptions, RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript  from 'react-refresh-typescript';

import { BuildOptions } from "./buildWebpackConfig";


function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

  const { isDev, paths } = options;
  
  const tsxLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: true,
        }
      }
    ],
    exclude: /node_modules/,
  }

  // "css-loader",
  // Translates CSS into CommonJS
  const cssModulesLoader = {
    loader: "css-loader",
    options: {
      modules: {
      // for simple import => import stl from '.module.scss' NOT import * as stl from '...'
        exportLocalsConvention: 'as-is',
        namedExport: false,
      // Создаем имя класса
        localIdentContext: paths.src,
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
      },
    },
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssModulesLoader,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const imagesLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true
        }
      }
    ],
  }

  return [
    tsxLoader,
    cssLoader,
    imagesLoader,
    svgLoader,
  ]
}

export default buildLoaders;
