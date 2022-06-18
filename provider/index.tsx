import { FC } from "react";

import { StoresProvider } from "../stores";
import Tamagui from "../tamagui.config";
import { NavigationProvider } from "./navigation";

export const Provider: FC = ({ children }) => {
  return (
    <StoresProvider>
      <Tamagui.Provider defaultTheme="light">
        <NavigationProvider>{children}</NavigationProvider>
      </Tamagui.Provider>
    </StoresProvider>
  );
};
