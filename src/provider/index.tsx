import { FC, PropsWithChildren } from "react";

import { StoresProvider } from "../stores";
import { NavigationProvider } from "./navigation";
import { TamaguiProvider } from "./tamagui";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoresProvider>
      <TamaguiProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </TamaguiProvider>
    </StoresProvider>
  );
};
