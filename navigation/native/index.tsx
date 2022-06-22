import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

import { HomeScreen } from "../../features/home/screen";
import { UserDetailScreen } from "../../features/user/detail-screen";
import { Header } from "../header";

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export const NativeNavigation: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route: { name } }) => (
          <Header name={name as keyof StackNavigatorParams} />
        ),
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="user-detail" component={UserDetailScreen} />
    </Stack.Navigator>
  );
};
