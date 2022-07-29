import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Github, Twitter } from "@tamagui/feather-icons";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Anchor, Button, H1, H5, ListItem, Separator, YGroup, YStack } from "tamagui";

import { LinkToUser } from "./link-to-user";

export const HomeScreen: FC<
  NativeStackScreenProps<StackNavigatorParams, "home">
> = ({ navigation }) => {
  const { t } = useTranslation(["home"]);

  return (
    <YStack bc="$backgroundStrong" f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">{t("home:welcome")}</H1>
        <H5 ta="center">{t("home:message")}</H5>
        <Separator />
        <H5 ta="center">{t("home:made-by")}</H5>
      </YStack>

      <LinkToUser navigation={navigation} />

      <YGroup w="100%">
        <ListItem icon={Twitter}>
          <Anchor href="https://twitter.com/natebirdman" target="_blank">
            Nate
          </Anchor>
        </ListItem>
        <ListItem icon={Github}>
          <Anchor
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            Tamagui
          </Anchor>
        </ListItem>
        <ListItem icon={Github}>
          <Anchor
            href="https://github.com/ivopr/tamagui-expo"
            target="_blank"
            rel="noreferrer"
          >
            Template
          </Anchor>
        </ListItem>
      </YGroup>
    </YStack>
  );
};
