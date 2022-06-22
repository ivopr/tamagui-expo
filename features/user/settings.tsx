import { Settings as SettingsIcon } from "@tamagui/feather-icons";
import { FC } from "react";
import { Button, Dialog } from "tamagui";

export const Settings: FC = (() => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button icon={SettingsIcon} themeInverse>
          Settings
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal p="$4">
        <Dialog.Overlay
          key="settings-overlay"
          animation="quick"
          bc="black"
          o={0.75}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="settings-content"
          space
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
          <Dialog.Title>Settings</Dialog.Title>
          <Dialog.Description>Some useful things for you</Dialog.Description>

          <Dialog.Close asChild>
            <Button themeInverse aria-label="Close">
              Done
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
});
