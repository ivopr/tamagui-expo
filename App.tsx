import "expo-dev-client";

import { useFonts } from "expo-font";
import { FC, useMemo, useState } from "react";
import { Appearance } from "react-native";

import { NativeNavigation } from "./navigation/native";
import { Provider } from "./provider";
import { ThemeContext } from "./provider/useTheme";

const App: FC = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/ttf/Inter.ttf"),
  });

  const themeContext = useMemo(() => {
    return {
      value: theme,
      set: setTheme,
    };
  }, [theme]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={themeContext}>
      <Provider defaultTheme={theme}>
        <NativeNavigation />
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
