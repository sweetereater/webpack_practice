import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'development' | 'production' | 'none'

interface ConfigEnv {
  mode: Mode,
  port: number
}

export default (env: ConfigEnv): webpack.Configuration => {

  const isDev = env.mode === 'development';

  return {
    // Режим сборки => 'development' | 'production' | 'none'
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      // Имя бандла, [contenthash] рассчитывается с учетом содержимое => меняется код - меняется имя сборки
      // [contenthash] используется для того, чтобы при изменениях в сборке - браузер брал данные
      filename: 'bundle.[contenthash].js',
      // Путь до папки с итоговой сборкой
      path: path.resolve(__dirname, 'build'),
      // Очистка папки от старых бандлов
      clean: true,
    },

    devServer: {
      open: true,
      port: env.port ?? 3000,
    },

    // Плагины, которые расщиряют функционал webpack'а
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
      new MiniCssExtractPlugin(),
    ],

    // Лоадеры нужны для обработки не .js файлов (Webpack изначально понимает только .js)
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            isDev ? MiniCssExtractPlugin.loader : "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  }
}
