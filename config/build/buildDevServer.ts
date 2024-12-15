import { BuildOptions } from "./buildWebpackConfig";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    historyApiFallback: true,
    open: true,
    port: options.port ?? 3000,
  }
}

export default buildDevServer;
