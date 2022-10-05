import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Github, Twitter } from "@tamagui/feather-icons";
import { FC } from "react";
import { Anchor, H1, H5, ListItem, Separator, YGroup, YStack } from "tamagui";

import { LinkToUser } from "./link-to-user";

export const HomeScreen: FC<
  NativeStackScreenProps<StackNavigatorParams, "home">
> = ({ navigation }) => {
  return (
    <YStack
      backgroundColor="$backgroundStrong"
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding="$4"
      space
    >
      <YStack space="$4" maxWidth={600}>
        <H1 textAlign="center">Welcome to Tamagui.</H1>
        <H5 textAlign="center">
          Here's a basic starter to show navigating from one screen to another.
        </H5>
        <Separator />
        <H5 textAlign="center">Tamagui is made by Nate Wienert.</H5>
        <H5 textAlign="center">This template was made by Ivo Vieira.</H5>
        <H5 textAlign="center">You should probably star our repos.</H5>
      </YStack>

      <LinkToUser navigation={navigation} />

      <YGroup width="100%">
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
