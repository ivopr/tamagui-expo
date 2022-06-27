import { FC } from "react";
import { TamaguiProviderProps } from "tamagui";

import { StoresProvider } from "../stores";
import { NavigationProvider } from "./navigation";
import { TamaguiProvider } from "./tamagui";

export const Provider: FC<TamaguiProviderProps> = ({ children, ...rest }) => {
  return (
    <StoresProvider>
      <TamaguiProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </TamaguiProvider>
    </StoresProvider>
  );
};
