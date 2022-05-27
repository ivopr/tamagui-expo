import { Button, Paragraph, YStack } from "tamagui";
import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigatorParams } from "../../navigation/native";

export const UserDetailScreen: FC<NativeStackScreenProps<StackNavigatorParams, "user-detail">> = ({ navigation, route }) => {
  const { id } = route.params

  const goToHome = () => navigation.canGoBack() ? navigation.goBack() : navigation.navigate("home")
  
  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fw="800">{`User ID: ${id}`}</Paragraph>
      <Button onPress={goToHome}>👈 Go Home</Button>
    </YStack>
  );
}
