import { useTheme } from "@saleor/macaw-ui";
import { memo, useEffect } from "react";
import { useAppBridge } from "@saleor/app-sdk-next";


/**
 * Macaw-ui stores its theme mode in memory and local storage. To synchronize App with Dashboard,
 * Macaw must be informed about this change from AppBridge.
 *
 * If you are not using Macaw, you can remove this.
 */
function _ThemeSynchronizer() {
  const { appBridgeState } = useAppBridge();
  const { setTheme, themeType } = useTheme();

  useEffect(() => {
    if (!setTheme || !appBridgeState?.theme) {
      return;
    }

    if (themeType !== appBridgeState?.theme) {
      setTheme(appBridgeState.theme);
    }
  }, [appBridgeState?.theme, setTheme, themeType]);

  return null;
}

export const ThemeSynchronizer = memo(_ThemeSynchronizer);
