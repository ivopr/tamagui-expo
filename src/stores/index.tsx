import "./_hydration";

import React, { PropsWithChildren } from "react";

import { CounterStore } from "./counter";
import { UIStore } from "./ui";

export const stores = {
  counter: new CounterStore(),
  ui: new UIStore(),
};
type ContextStores = typeof stores;

const storeContext = React.createContext<ContextStores>(stores);
export const StoresProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <storeContext.Provider value={stores}>{children}</storeContext.Provider>
);

export const useStores = (): ContextStores => React.useContext(storeContext);

export const hydrateStores = async (): PVoid => {
  for (const key in stores) {
    if (Object.prototype.hasOwnProperty.call(stores, key)) {
      const s = (stores as Stores)[key];

      if (s?.hydrate) {
        await s.hydrate();
      }
    }
  }
};
