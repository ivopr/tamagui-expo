import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { makeAutoObservable } from "mobx";
import { hydrateStore, makePersistable } from "mobx-persist-store";

export class AuthStore implements IStore {
  signInTries = 0;
  incSignInTries = (v = 1): void => {
    this.signInTries += v;
  };

  signInSuccess = 0;
  incSignInSuccess = (v = 1): void => {
    this.signInSuccess += v;
  };

  signedIn = false;
  setSignedIn = (v: boolean): void => {
    this.signedIn = v;
  };

  user?: FirebaseAuthTypes.User = undefined;
  setUser = (v?: FirebaseAuthTypes.User) => {
    this.user = v;
  };

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: AuthStore.name,
      // properties: [],
      properties: ["signedIn", "signInTries", "signInSuccess", "user"],
    });
  }

  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
