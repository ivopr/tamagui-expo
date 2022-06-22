import { ConfigContext, ExpoConfig } from "@expo/config";
const IS_DEV = process.env.APP_VARIANT === "development";
const IS_BETA = process.env.APP_VARIANT === "beta";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  assetBundlePatterns: ["**/*"],
  scheme: "tamagui-firebase-mobx-template",
  name: IS_DEV ? "[DEV] TFMT" : IS_BETA ? "Tamagui Beta" : "Tamagui",
  slug: "tamaguifmt",
  version: "1.1.1",
  orientation: "portrait",
  icon: IS_DEV
    ? "./assets/icons/icon-dev.png"
    : IS_BETA
    ? "./assets/icons/icon-beta.png"
    : "./assets/icons/icon.png",
  userInterfaceStyle: "light",
  splash: {
    backgroundColor: "#ddffe2",
    image: "./assets/splash.png",
    resizeMode: "contain",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  android: {
    package: IS_DEV ? "dev.tamagui.expo.devclient" : "dev.tamagui.expo.client",
    googleServicesFile: "google-services.json",
    versionCode: 5,
  },
  androidNavigationBar: {
    backgroundColor: "#ddffe2",
    barStyle: "dark-content",
  },
  androidStatusBar: {
    backgroundColor: "#ddffe2",
    barStyle: "dark-content",
  },
  plugins: [
    "@react-native-firebase/app",
    "@react-native-firebase/crashlytics",
    "@react-native-firebase/perf",
    "@react-native-google-signin/google-signin",
  ],
});
