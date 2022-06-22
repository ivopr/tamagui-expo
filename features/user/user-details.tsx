import { observer } from "mobx-react";
import { FC } from "react";
import { Avatar, H4, YStack } from "tamagui";

import { useStores } from "../../stores";

export const UserDetails: FC = observer(() => {
  const { auth } = useStores();

  return (
    <YStack ai="center" space="$1">
      <Avatar circular size="$12">
        <Avatar.Image
          defaultSource={0}
          h="100%"
          src={auth.user?.photoURL}
          w="100%"
        />
        <Avatar.Fallback bc="$green10Light" />
      </Avatar>
      <H4 textTransform="capitalize">{auth.user?.displayName}</H4>
    </YStack>
  );
});
