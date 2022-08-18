import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "tamagui";

type LinkToUserProps = {
  navigation: NativeStackNavigationProp<
    StackNavigatorParams,
    "home",
    undefined
  >;
};

export const LinkToUser: FC<LinkToUserProps> = ({ navigation }) => {
  const { t } = useTranslation("home");

  const goToUser = () =>
    navigation.navigate("user-detail", {
      id: "John Doe",
    });

  return (
    <Button onPress={goToUser} w="100%">
      {t("link-to-user")}
    </Button>
  );
};
