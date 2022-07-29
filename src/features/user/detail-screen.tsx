import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Edit3, Mail, Moon, Sun, Trash2 } from "@tamagui/feather-icons";
import { observer } from "mobx-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, H5, ListItem, Spacer, YGroup, YStack } from "tamagui";

import { useStores } from "../../stores";
import { Settings } from "./settings";
import { UserDetails } from "./user-details";

export const UserDetailScreen: FC<
  NativeStackScreenProps<StackNavigatorParams, "user-detail">
> = observer(({ route }) => {
  const { ui } = useStores();
  const { t } = useTranslation(["user"]);
  const { id } = route.params;

  return (
    <YStack bc="$backgroundStrong" h="100%" f={1} p="$4" space>
      <UserDetails id={id} />

      <YGroup>
        <ListItem
          pressTheme
          onPress={() => {
            ui.setAppearanceMode(ui.appearance === "light" ? "dark" : "light");
          }}
          w="100%"
        >
          <ListItem.Text>{t("user:theme")}</ListItem.Text>
          <Spacer f={1} />
          <Button
            chromeless
            disabled
            w={20}
            icon={ui.appearance === "light" ? Sun : Moon}
          />
        </ListItem>
      </YGroup>
      <H5>{t("user:account")}</H5>
      <YGroup>
        <ListItem pressTheme icon={Edit3}>
          {t("user:edit")}
        </ListItem>
        <ListItem pressTheme icon={Mail}>
          {t("user:invite")}
        </ListItem>
        <ListItem pressTheme icon={Trash2}>
          {t("user:data-del")}
        </ListItem>
      </YGroup>
      <H5>{t("user:misc")}</H5>
      <YGroup>
        <Settings />
      </YGroup>
    </YStack>
  );
});
