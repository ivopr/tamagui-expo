import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ArrowLeft, Lock } from "@tamagui/feather-icons";
import { observer } from "mobx-react";
import { FC } from "react";
import { Avatar, Button, H2, XStack } from "tamagui";

import { webClientId } from "../constants/secrets";
import { useStores } from "../stores";

type HeaderProps = {
  name: keyof StackNavigatorParams;
};

GoogleSignin.configure({
  webClientId,
});

async function onGoogleButtonPress(): Promise<FirebaseAuthTypes.UserCredential> {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return await auth().signInWithCredential(googleCredential);
}

export const Header: FC<HeaderProps> = observer(({ name }) => {
  const { auth } = useStores();
  const { navigate, canGoBack, goBack } =
    useNavigation<NavigationProp<StackNavigatorParams>>();
  const route = useRoute<RouteProp<StackNavigatorParams>>();

  const goToUser = () =>
    navigate("user-detail", {
      id: auth.user.displayName,
    });

  const isUserScreen = route.name === "user-detail";
  const isHomeScreen = route.name === "home";

  return (
    <XStack ai="center" h="$6" jc="space-between" px="$2.5">
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
      <XStack space="$1">
        {auth.signedIn && auth.user && !isUserScreen ? (
          <Avatar circular size="$5" onPress={goToUser}>
            <Avatar.Image
              h="100%"
              w="100%"
              defaultSource={0}
              src={auth.user?.photoURL}
            />
            <Avatar.Fallback bc="$green10Light" />
          </Avatar>
        ) : null}
        {!auth.signedIn ? (
          <Button icon={Lock} maw={150} onPress={onGoogleButtonPress}>
            Sign In
          </Button>
        ) : null}
      </XStack>
    </XStack>
  );
});
