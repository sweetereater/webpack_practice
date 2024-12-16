import { Configuration } from 'webpack';
import { BuildOptions } from './buildWebpackConfig';
import path from 'path';

function buildResolving(options: BuildOptions): Configuration['resolve'] {
  return {
    alias: {
      '@components': path.resolve(options.paths.src, 'components'),
      '@pages': path.resolve(options.paths.src, 'pages'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  }
}

export default buildResolving;
