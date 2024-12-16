import webpack from 'webpack';

import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildDevServer from './buildDevServer';
import buildResolving from './buildResolving';

export type Mode = 'development' | 'production' | 'none';

export interface BuildOptions {
  isDev: boolean,
  mode: Mode,
  port: number,
  paths: {
    entry: string,
    html: string,
    output: string,
    src: string,
  },
  useWebpackBundleAnalyzer: boolean
}


function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { isDev, mode, port, paths } = options;

  return {
    mode,

    entry: paths.entry,

    output: {
      clean: true,
      path: paths.output,
      filename: 'bundle.[contenthash:8].js',
    },

    devServer: buildDevServer(options),

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options)
    },

    resolve: buildResolving(),

  }
}

export default buildWebpackConfig;
