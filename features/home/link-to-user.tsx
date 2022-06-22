import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { observer } from "mobx-react";
import { FC } from "react";
import { Button } from "tamagui";

import { useStores } from "../../stores";

type LinkToUserProps = {
  navigation: NativeStackNavigationProp<
    StackNavigatorParams,
    "home",
    undefined
  >;
};

export const LinkToUser: FC<LinkToUserProps> = observer(({ navigation }) => {
  const { auth } = useStores();

  const goToUser = () => navigation.navigate("user-detail");

  if (!auth.signedIn) {
    return null;
  }

  return (
    <Button themeInverse onPress={goToUser}>
      Link to user
    </Button>
  );
});
