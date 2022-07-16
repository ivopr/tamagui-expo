import { Settings as SettingsIcon } from "@tamagui/feather-icons";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Dialog, Group, Separator } from "tamagui";

import { useStores } from "../../stores";

export const Settings: FC = () => {
  const { ui } = useStores();
  const { t, i18n } = useTranslation(["user", "locales", "common"]);

  return (
    <Dialog
      modal
      // sheetBreakpoint="$sm"
    >
      <Dialog.Trigger asChild>
        <Button icon={SettingsIcon} themeInverse>
          {t("user:settings")}
        </Button>
      </Dialog.Trigger>

      {/* <Dialog.Sheet dismissOnOverlayPress dismissOnSnapToBottom modal>
        <Dialog.Sheet.Handle />
        <Dialog.Sheet.Frame>
          <Dialog.SheetContents />
        </Dialog.Sheet.Frame>
        <Dialog.Sheet.Overlay />
      </Dialog.Sheet> */}

      <Dialog.Portal p="$2">
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
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
          w="100%"
        >
          <Dialog.Title>{t("user:settings")}</Dialog.Title>
          <Dialog.Description>{t("user:settings-desc")}</Dialog.Description>

          <Group vertical separator={<Separator />}>
            <Button
              onPress={() => {
                i18n.changeLanguage("br");
                ui.setLanguage("br");
              }}
              themeInverse
            >
              {t("locales:br")}
            </Button>

            <Button
              onPress={() => {
                i18n.changeLanguage("en");
                ui.setLanguage("en");
              }}
              themeInverse
            >
              {t("locales:en")}
            </Button>
          </Group>

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
