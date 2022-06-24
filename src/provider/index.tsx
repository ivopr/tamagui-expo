import { FC } from "react";
import { TamaguiProviderProps } from "tamagui";

import Tamagui from "../tamagui.config";
import { NavigationProvider } from "./navigation";

export const Provider: FC<TamaguiProviderProps> = ({ children, ...rest }) => {
  return (
    <Tamagui.Provider defaultTheme="light" {...rest}>
      <NavigationProvider>{children}</NavigationProvider>
    </Tamagui.Provider>
  );
};
