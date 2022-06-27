import { makeAutoObservable } from "mobx";
import { hydrateStore, makePersistable } from "mobx-persist-store";

export class UIStore implements IStore {
  appLaunches = 0;
  incAppLaunces = (v = 1): void => {
    this.appLaunches += v;
  };

  appearance: AppearanceMode = "light";
  setAppearanceMode = (v: AppearanceMode): void => {
    this.appearance = v;
  };
  get appearanceName(): AppearanceMode {
    return this.appearance;
  }

  language: Language = "en";
  setLanguage = (v: Language): void => {
    this.language = v;
  };
  get languageName(): Language {
    return this.language;
  }

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: UIStore.name,
      // properties: [],
      properties: ["appLaunches", "appearance", "language"],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
