import webpack from 'webpack';

function buildResolving(): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}

export default buildResolving;