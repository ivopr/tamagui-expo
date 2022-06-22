import { Zap } from "@tamagui/feather-icons";
import { observer } from "mobx-react";
import { FC } from "react";
import { Button, Dialog, XStack } from "tamagui";

export const ChangeTheme: FC = observer(() => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button icon={Zap} themeInverse>
          Change Theme
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
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
        >
          <Dialog.Title>Change Theme</Dialog.Title>
          <Dialog.Description>Modify Tamagui Theme</Dialog.Description>

          <XStack space="$1.5" w="100%">
            <Dialog.Close asChild>
              <Button theme="dark_green_alt3" aria-label="Close" w="45%">
                Save Changes
              </Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button theme="dark_red_alt3" aria-label="Close" w="45%">
                Cancel Changes
              </Button>
            </Dialog.Close>
          </XStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
});
