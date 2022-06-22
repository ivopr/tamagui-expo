import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Edit3, Mail, Trash2 } from "@tamagui/feather-icons";
import { FC } from "react";
import { Button, H5, YStack } from "tamagui";

import { ChangeTheme } from "./change-theme";
import { Settings } from "./settings";
import { UserDetails } from "./user-details";

export const UserDetailScreen: FC<
  NativeStackScreenProps<StackNavigatorParams, "user-detail">
> = ({route}) => {
  const {id} = route.params;

  return (
    <YStack bc="$background" f={1} p="$4" space>
      <UserDetails id={id} />
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
        <Settings />
        <ChangeTheme />
      </YStack>
    </YStack>
  );
};
