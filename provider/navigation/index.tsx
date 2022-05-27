import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";

export const NavigationProvider: FC = ({ children }) => {
  return (
    <NavigationContainer>
      {children}
    </NavigationContainer>
  );
}
