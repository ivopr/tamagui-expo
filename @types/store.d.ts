interface IStore {
  hydrate?: () => PVoid;
}
type Stores = Record<string, IStore>;

type AppearanceMode = "light" | "dark";
type Language = "en" | "pt";