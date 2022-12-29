import { createAuthenticatedFetch } from "@saleor/app-sdk/app-bridge";
import { useAppBridge } from "./app-bridge-provider";

export * from "./app-bridge-provider";
export * from "./use-dashboard-token";

export const useAuthenticatedFetch = (fetch = global.fetch) => {
  const { appBridge } = useAppBridge();

  if (!appBridge) {
    throw new Error("useAuthenticatedFetch can be used only in browser context");
  }

  return createAuthenticatedFetch(appBridge, fetch);
};
