import { Configuration } from 'webpack';

function buildResolving(): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}

export default buildResolving;
