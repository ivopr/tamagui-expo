import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { Lock } from "@tamagui/feather-icons";
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

  return (
    <XStack
      alignItems="center"
      height="$6"
      justifyContent="space-between"
      paddingHorizontal="$2.5"
    >
      <H2 textTransform="capitalize">{name}</H2>
      <XStack space="$1">
        {auth.signedIn && auth.user ? (
          <Avatar circular size="$5">
            <Avatar.Image defaultSource={0} src={auth.user?.photoURL} />
            <Avatar.Fallback />
          </Avatar>
        ) : null}
        {!auth.signedIn ? (
          <Button icon={Lock} maxWidth={150} onPress={onGoogleButtonPress}>
            Sign In
          </Button>
        ) : null}
      </XStack>
    </XStack>
  );
});
