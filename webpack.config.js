const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    // Режим сборки => 'development' | 'production' | 'none'
    mode: env.mode,
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
      // Имя бандла, [contenthash] рассчитывается с учетом содержимое => меняется код - меняется имя сборки
      // [contenthash] используется для того, чтобы при изменениях в сборке - браузер брал данные
      filename: 'bundle.[contenthash].js',
      // Путь до папки с итоговой сборкой
      path: path.resolve(__dirname, 'build'),
      // Очистка папки от старых бандлов
      clean: true,
    },

    // Плагины, которые расщиряют функционал webpack'а
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
    ],

    // Лоадеры нужны для обработки не .js файлов (Webpack изначально понимает только .js)
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  }
}
