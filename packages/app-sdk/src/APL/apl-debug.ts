import { createDebug, Debugger } from "@saleor/util";

export const createAPLDebug = (namespace: string): Debugger => createDebug(`APL:${namespace}`);
