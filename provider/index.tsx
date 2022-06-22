import { observer } from "mobx-react";
import { FC } from "react";
import { TamaguiProviderProps } from "tamagui";

import { useStores } from "../stores";
import Tamagui from "../tamagui.config";
import { NavigationProvider } from "./navigation";

export const Provider: FC<TamaguiProviderProps> = observer(
  ({ children, ...rest }) => {
    const { ui } = useStores();

    return (
      <Tamagui.Provider defaultTheme={ui.appearance}>
        <NavigationProvider>{children}</NavigationProvider>
      </Tamagui.Provider>
    );
  }
);
