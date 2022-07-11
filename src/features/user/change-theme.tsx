import { Moon, Sun, Zap } from "@tamagui/feather-icons";
import { observer } from "mobx-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Dialog, ListItem, Spacer, Switch } from "tamagui";

import { useStores } from "../../stores";

export const ChangeTheme: FC = () => {
  const { t } = useTranslation(["user", "common"]);

  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button icon={Zap} themeInverse>
          {t("user:change-theme")}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal p="$2">
        <Dialog.Overlay
          key="change-theme-overlay"
          animation="quick"
          bc="black"
          o={0.75}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="change-theme-content"
          space
          animation="quick"
          // animation={[
          //   "quick",
          //   {
          //     opacity: {
          //       overshootClamping: true,
          //     },
          //   },
          // ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
          w="100%"
        >
          <Dialog.Title>{t("user:change-theme")}</Dialog.Title>

          <ColorSchemeListItem />

          <Dialog.Close asChild>
            <Button theme="dark_green_alt3" aria-label="Close">
              {t("common:done")}
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

const ColorSchemeListItem = observer(() => {
  const { t } = useTranslation(["user"]);
  const { ui } = useStores();

  const checked = ui.appearance === "light";

  return (
    <ListItem
      pressTheme
      onPress={() => {
        ui.setAppearanceMode(ui.appearance === "light" ? "dark" : "light");
      }}
      w="100%"
    >
      <ListItem.Text>{t("user:theme")}</ListItem.Text>
      <Spacer f={1} />
      <Button chromeless disabled icon={Moon} p="$0" pr="$2.5" />
      <Switch checked={checked}>
        <Switch.Thumb
        // animation="bouncy"
        />
      </Switch>
      <Button chromeless disabled icon={Sun} p="$0" pl="$2.5" />
    </ListItem>
  );
});
