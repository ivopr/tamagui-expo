import { Moon, Sun, Zap } from "@tamagui/feather-icons";
import { observer } from "mobx-react";
import { FC } from "react";
import { Button, Dialog, ListItem, Spacer, Switch } from "tamagui";

import { useStores } from "../../stores";

export const ChangeTheme: FC = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button icon={Zap} themeInverse>
          Change Theme
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal p="$4">
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
          // animation="quick"
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
          <Dialog.Title>Change Theme</Dialog.Title>
          <Dialog.Description>Modify Tamagui Theme</Dialog.Description>

          <ColorSchemeListItem />

          <Dialog.Close asChild>
            <Button theme="dark_green_alt3" aria-label="Close">
              Done
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

const ColorSchemeListItem = observer(() => {
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
      <ListItem.Text>Theme</ListItem.Text>
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
