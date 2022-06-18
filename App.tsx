import "react-native-get-random-values";
import "expo-dev-client";

import { useFonts } from "expo-font";
import { FC } from "react";

import { NativeNavigation } from "./navigation/native";
import { Provider } from "./provider";

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
