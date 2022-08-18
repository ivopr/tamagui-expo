import { observer } from "mobx-react";
import { FC, PropsWithChildren } from "react";
import { TamaguiProvider as Provider } from "tamagui";

import { useStores } from "../stores";
import { config } from "../tamagui.config";

export const TamaguiProvider: FC<PropsWithChildren> = observer(
  ({ children }) => {
    const { ui } = useStores();

    return (
      <Provider config={config} defaultTheme={ui.appearance}>
        {children}
      </Provider>
    );
  }
);
