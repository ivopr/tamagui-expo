import firebaseAuth from "@react-native-firebase/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react";
import { FC, useCallback, useEffect } from "react";

import { HomeScreen } from "../../features/home/screen";
import { UserDetailScreen } from "../../features/user/detail-screen";
import { useStores } from "../../stores";
import { Header } from "../header";

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export const NativeNavigation: FC = observer(() => {
  const { auth } = useStores();

  const listeners = useCallback(async () => {
    const authListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        auth.setUser(user);
        auth.setSignedIn(true);
        auth.incSignInSuccess();
      } else {
        auth.setUser();
        auth.setSignedIn(false);
      }
    });

    return () => {
      authListener();
    };
  }, []);

  useEffect(() => {
    listeners();
  }, [listeners]);

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route: { name } }) => (
          <Header name={name as keyof StackNavigatorParams} />
        ),
      }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: "User",
        }}
      />
    </Stack.Navigator>
  );
});
