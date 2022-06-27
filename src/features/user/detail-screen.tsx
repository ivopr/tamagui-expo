import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Edit3, Mail, Trash2 } from "@tamagui/feather-icons";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, H5, YStack } from "tamagui";

import { ChangeTheme } from "./change-theme";
import { Settings } from "./settings";
import { UserDetails } from "./user-details";

export const UserDetailScreen: FC<
  NativeStackScreenProps<StackNavigatorParams, "user-detail">
> = ({ route }) => {
  const { t } = useTranslation(["user"]);
  const { id } = route.params;

  return (
    <YStack bc="$background" f={1} p="$4" space>
      <UserDetails id={id} />
      <YStack space="$1" w="100%">
        <H5>{t("user:account")}</H5>
        <Button icon={Edit3} themeInverse>
          {t("user:edit")}
        </Button>
        <Button icon={Mail} themeInverse>
          {t("user:invite")}
        </Button>
        <Button icon={Trash2} theme="dark_red_alt3">
          {t("user:data-del")}
        </Button>
      </YStack>
      <YStack space="$1" w="100%">
        <H5>{t("user:misc")}</H5>
        <Settings />
        <ChangeTheme />
      </YStack>
    </YStack>
  );
};
