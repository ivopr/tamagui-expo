import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Theme, ToastProvider } from "tamagui";

import config from "../tamagui.config";
import { emerald, zinc } from "../utils/colors";

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  if (!loaded) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider
      value={{
        colors: {
          border: "transparent",
          primary: emerald["600"],
          background: zinc["900"],
          text: zinc["100"],
          card: zinc["700"],
          notification: emerald["400"]
        },
        dark: true
      }}
    >
      <TamaguiProvider config={config}>
        <Theme name={colorScheme}>
          <ToastProvider native={["mobile"]}>
            <SafeAreaView style={{ flex: 1 }}>
              <Stack
                screenOptions={{
                  headerShown: false
                }}
              />
            </SafeAreaView>
          </ToastProvider>
        </Theme>
        <StatusBar
          style="light"
          backgroundColor="#000000"
        />
      </TamaguiProvider>
    </ThemeProvider>
  );
}
