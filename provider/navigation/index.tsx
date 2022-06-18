import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";

export const NavigationProvider: FC = ({ children }) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
