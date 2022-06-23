import { FC } from "react";
import { H4, YStack } from "tamagui";

type UserDetailProps = {
  id: string;
};

export const UserDetails: FC<UserDetailProps> = ({ id }) => {
  return (
    <YStack ai="center" space="$1">
      <H4 textTransform="capitalize">{id}</H4>
    </YStack>
  );
};
