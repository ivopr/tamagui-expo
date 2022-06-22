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
          src={auth.user?.photoURL}
        />
        <Avatar.Fallback />
      </Avatar>
      <H4 textTransform="capitalize">{auth.user?.displayName}</H4>
    </YStack>
  );
});
