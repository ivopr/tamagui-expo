import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Edit3, Mail, Moon, Sun, Trash2 } from "@tamagui/feather-icons";
import { observer } from "mobx-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Group, H5, ListItem, Spacer, Switch, YStack } from "tamagui";

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
    <YStack bc="$backgroundStrong" f={1} p="$4" space>
      <UserDetails id={id} />

      <Group vertical>
        <ListItem
          pressTheme
          onPress={() => {
            ui.setAppearanceMode(ui.appearance === "light" ? "dark" : "light");
          }}
          w="100%"
        >
          <ListItem.Text>{t("user:theme")}</ListItem.Text>
          <Spacer f={1} />
          <Button chromeless disabled w={20} icon={Moon} />
          <Switch ai="center" checked={ui.appearance === "light"} themeShallow>
            <Switch.Thumb animation="quick" />
          </Switch>
          <Button chromeless disabled w={20} icon={Sun} />
        </ListItem>
      </Group>
      <H5>{t("user:account")}</H5>
      <Group vertical>
        <Button icon={Edit3} themeInverse>
          {t("user:edit")}
        </Button>
        <Button icon={Mail} themeInverse>
          {t("user:invite")}
        </Button>
        <Button icon={Trash2} theme="dark_red_alt3">
          {t("user:data-del")}
        </Button>
      </Group>
      <H5>{t("user:misc")}</H5>
      <Group vertical>
        <Settings />
      </Group>
    </YStack>
  );
});
