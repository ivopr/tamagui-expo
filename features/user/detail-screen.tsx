import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { YStack } from "tamagui";

import { UserDetails } from "./user-details";

export const UserDetailScreen: FC<
  NativeStackScreenProps<StackNavigatorParams, "user-detail">
> = () => {
  return (
    <YStack p="$4" space>
      <UserDetails />
    </YStack>
  );
};
