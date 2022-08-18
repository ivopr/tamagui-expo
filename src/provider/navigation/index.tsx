import { NavigationContainer } from "@react-navigation/native";
import { FC, PropsWithChildren } from "react";

export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
