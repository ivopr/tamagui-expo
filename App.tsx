import { NativeNavigation } from "./navigation/native";
import { Provider } from "./provider";
import { useFonts } from "expo-font";
import React from "react";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/ttf/Inter.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  );
}
