import path from 'path';
import webpack from 'webpack';

import buildWebpackConfig, { Mode, Platform } from './config/build/buildWebpackConfig';

interface ConfigEnv {
  analyze?: boolean
  mode?: Mode,
  platform?: Platform,
  port?: number,
}

export default (env: ConfigEnv): webpack.Configuration => {
  const { analyze, platform, port } = env;

  const mode = env.mode ?? 'development';
  const isDev = mode === 'development';
  const buildPlatform = platform ?? 'desktop';
  const useWebpackBundleAnalyzer = analyze ?? false;

  return buildWebpackConfig({
    isDev,
    mode,
    port: port ?? 3000,
    paths: {
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      src: path.resolve(__dirname, 'src'),
    },
    platform: buildPlatform,
    useWebpackBundleAnalyzer
  })
}
