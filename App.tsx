import "react-native-get-random-values";
import "expo-dev-client";

import messaging from "@react-native-firebase/messaging";
import { useFonts } from "expo-font";
import { FC, useEffect } from "react";

import { NativeNavigation } from "./navigation/native";
import { Provider } from "./provider";

const App: FC = () => {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/ttf/Inter.ttf"),
  });

  useEffect(() => {
    // Listen for push notifications
    const unsubscribe = messaging().onMessage(console.log);

    return () => {
      unsubscribe();
    };
  }, []);

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
