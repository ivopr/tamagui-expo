import { ConfigContext, ExpoConfig } from "@expo/config";
const IS_DEV = process.env.APP_VARIANT === "development";
const IS_BETA = process.env.APP_VARIANT === "beta";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  scheme: "tamagui",
  name: "Tamagui",
  slug: "tamagui",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icons/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#333333",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
});
