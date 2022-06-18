import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { Anchor, H1, Paragraph, Separator, XStack, YStack } from "tamagui";

import { LinkToUser } from "./link-to-user";

export const HomeScreen: FC<
  NativeStackScreenProps<StackNavigatorParams, "home">
> = ({ navigation }) => {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another.
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <Separator />
        <Paragraph ta="center">
          Tamagui is made by{" "}
          <Anchor href="https://twitter.com/natebirdman" target="_blank">
            Nate Wienert
          </Anchor>
          , give it a star{" "}
          <Anchor
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            on Github
          </Anchor>
          .
        </Paragraph>
      </YStack>

      <XStack>
        <LinkToUser navigation={navigation} />
      </XStack>
    </YStack>
  );
};
