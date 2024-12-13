import path from 'path';
import webpack from 'webpack';

import buildWebpackConfig, { Mode } from './config/build/buildWebpackConfig';

interface ConfigEnv {
  mode: Mode,
  port: number
}

export default (env: ConfigEnv): webpack.Configuration => {
  const isDev = env.mode === 'development';
  return buildWebpackConfig({
    isDev,
    mode: env.mode ?? 'development',
    port: 3000,
    paths: {
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      src: path.resolve(__dirname, 'src'),
    }
  })
}
