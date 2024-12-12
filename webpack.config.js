const path = require('path');

module.exports = (env) => {
  return {
    // Режим сборки => 'development' | 'production' | 'none'
    mode: env.mode,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      // Имя бандла, [contenthash] рассчитывается с учетом содержимое => меняется код - меняется имя сборки
      // [contenthash] используется для того, чтобы при изменениях в сборке - браузер брал данные
      filename: 'bundle.[contenthash].js',
      // Путь до папки с итоговой сборкой
      path: path.resolve(__dirname, 'build'),
      // Очистка папки от старых бандлов
      clean: true,
    }
  }
}
