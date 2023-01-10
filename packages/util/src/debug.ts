import debugPkg from "debug";
import type { Debugger } from "debug";
export type { Debugger };

export const createDebug = (namespace: string): Debugger =>
  debugPkg.debug(`app-sdk:${namespace}`);
