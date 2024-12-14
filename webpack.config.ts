import path from 'path';
import webpack from 'webpack';

import buildWebpackConfig, { Mode } from './config/build/buildWebpackConfig';

interface ConfigEnv {
  mode: Mode,
  port: number
}

export default (env: ConfigEnv): webpack.Configuration => {
  const mode = env.mode ?? 'development';
  const isDev = mode === 'development';

  return buildWebpackConfig({
    isDev,
    mode,
    port: 3000,
    paths: {
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      src: path.resolve(__dirname, 'src'),
    }
  })
}
