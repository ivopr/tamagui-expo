import { Edit3, Mail, Settings, Trash2 } from "@tamagui/feather-icons";
import { observer } from "mobx-react";
import { FC } from "react";
import { Avatar, Button, H4, H5, YStack } from "tamagui";

import { useStores } from "../../stores";
import { ChangeTheme } from "./change-theme";

export const UserDetails: FC = observer(() => {
  const { auth } = useStores();

  return (
    <YStack ai="center" space="$2.5">
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
      <YStack space="$1" w="100%">
        <H5>Account</H5>
        <Button icon={Edit3} themeInverse>
          Edit My Profile
        </Button>
        <Button icon={Mail} themeInverse>
          Invite a Friend
        </Button>
        <Button icon={Trash2} theme="dark_red_alt3">
          Request Data Deletion
        </Button>
      </YStack>
      <YStack space="$1" w="100%">
        <H5>Misc</H5>
        <Button icon={Settings} themeInverse>
          Settings
        </Button>
        <ChangeTheme />
        <Button icon={Settings} themeInverse>
          My Settings
        </Button>
      </YStack>
    </YStack>
  );
});
