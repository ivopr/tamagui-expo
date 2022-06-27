import { observer } from "mobx-react";
import { FC } from "react";

import { useStores } from "../stores";
import Tamagui from "../tamagui.config";

export const TamaguiProvider: FC = observer(({ children }) => {
  const { ui } = useStores();

  return (
    <Tamagui.Provider defaultTheme={ui.appearance}>{children}</Tamagui.Provider>
  );
});
