import webpack from 'webpack';

import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildDevServer from './buildDevServer';
import buildResolving from './buildResolving';

export type Mode = 'development' | 'production' | 'none';
export type Platform = 'desktop' | 'mobile';

export interface BuildOptions {
  isDev: boolean,
  mode: Mode,
  port: number,
  paths: {
    entry: string,
    html: string,
    output: string,
    public: string,
    src: string,
  },
  platform: Platform,
  useWebpackBundleAnalyzer: boolean
}


function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

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

    resolve: buildResolving(options),

  }
}

export default buildWebpackConfig;
