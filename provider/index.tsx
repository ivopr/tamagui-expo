import { Drawer } from "@tamagui/drawer";
import { FC } from "react";

import Tamagui from "../tamagui.config";
import { NavigationProvider } from "./navigation";

export const Provider: FC = ({ children }) => {
  return (
    <Tamagui.Provider defaultTheme="light">
      <NavigationProvider>
        <Drawer.Provider>
          {children}
        </Drawer.Provider>
      </NavigationProvider>
    </Tamagui.Provider>
  );
}
