import en from "./locales/en.json";

// react-i18next versions higher than 11.11.0
declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: typeof en;
  }
}
