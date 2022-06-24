import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ArrowLeft } from "@tamagui/feather-icons";
import { FC } from "react";
import { Button, H2, XStack } from "tamagui";

type HeaderProps = {
  name: keyof StackNavigatorParams;
};

export const Header: FC<HeaderProps> = ({ name }) => {
  const { canGoBack, goBack } =
    useNavigation<NavigationProp<StackNavigatorParams>>();
  const route = useRoute<RouteProp<StackNavigatorParams>>();

  const isHomeScreen = route.name === "home";

  return (
    <XStack
      ai="center"
      bc="$backgroundStrong"
      h="$6"
      jc="space-between"
      px="$2.5"
    >
      <XStack space="$2">
        {!isHomeScreen && canGoBack() ? (
          <Button
            chromeless
            icon={ArrowLeft}
            onPress={goBack}
            p="$0"
            pr="$2.5"
            scaleIcon={1.75}
          />
        ) : null}
        <H2 textTransform="capitalize">{name}</H2>
      </XStack>
    </XStack>
  );
};
