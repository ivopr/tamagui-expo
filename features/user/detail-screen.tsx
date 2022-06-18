import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { Button, Paragraph, YStack } from "tamagui";

export const UserDetailScreen: FC<
  NativeStackScreenProps<StackNavigatorParams, "user-detail">
> = ({ navigation, route }) => {
  const { id } = route.params;

  const goToHome = () =>
    navigation.canGoBack() ? navigation.goBack() : navigation.navigate("home");

  return (
    <YStack p="$4" space>
      <Paragraph fow="800">{`User ID: ${id}`}</Paragraph>
      <Button themeInverse onPress={goToHome}>
        👈 Go Home
      </Button>
    </YStack>
  );
};
