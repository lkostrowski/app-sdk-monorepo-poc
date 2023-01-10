import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/browser.ts",
    "src/urls.ts",
    "src/headers.ts",
    "src/saleor-app.ts",
    "src/APL/index.ts",
    "src/app-bridge/index.ts",
    "src/handlers/next/index.ts",
    "src/middleware/index.ts",
    "src/settings-manager/index.ts",
    "src/util/index.ts",
  ],
  dts: true,
  clean: true,
  format: ["esm", "cjs"],
  splitting: true,
  external: ["**/*.md"],
});
