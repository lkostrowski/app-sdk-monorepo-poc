import { useAppBridge } from "./app-bridge-provider";

export * from "@saleor/app-sdk/browser";
import { createAuthenticatedFetch } from "@saleor/app-sdk/browser";

export const useAuthenticatedFetch = (fetch = global.fetch) => {
  const { appBridge } = useAppBridge();

  if (!appBridge) {
    throw new Error(
      "useAuthenticatedFetch can be used only in browser context"
    );
  }

  return createAuthenticatedFetch(appBridge, fetch);
};