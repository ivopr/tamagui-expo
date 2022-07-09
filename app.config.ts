import { ConfigContext, ExpoConfig } from "@expo/config";
const IS_DEV = process.env.APP_VARIANT === "development";
const IS_BETA = process.env.APP_VARIANT === "beta";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: IS_DEV ? `[DEV] ${config.name}` : config.name,
  slug: config.slug,
  version: "1.2.1",
  icon: IS_DEV
    ? "./assets/icons/icon-dev.png"
    : IS_BETA
    ? "./assets/icons/icon-beta.png"
    : "./assets/icons/icon.png",
  android: {
    package: IS_DEV ? "dev.tamagui.expo.devclient" : "dev.tamagui.expo.client",
    versionCode: 13,
  },
});
