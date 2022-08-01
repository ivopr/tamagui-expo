import "expo-dev-client";
import "./translations";

import { useFonts } from "expo-font";
import { FC } from "react";
import { connectToDevTools } from "react-devtools-core";

import { NativeNavigation } from "./navigation/native";
import { Provider } from "./provider";

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

const App: FC = () => {
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
};

export default App;
