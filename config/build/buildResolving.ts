import { Configuration } from 'webpack';
import { BuildOptions } from './buildWebpackConfig';
import path from 'path';

function buildResolving(options: BuildOptions): Configuration['resolve'] {
  const { paths } = options;
  const { src } = paths;

  return {
    alias: {
      '@assets': path.resolve(src, 'assets'),
      '@components': path.resolve(src, 'components'),
      '@pages': path.resolve(src, 'pages'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  }
}

export default buildResolving;
