import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { HomeScreen } from "../../features/home/screen";
import { UserDetailScreen } from "../../features/user/detail-screen";

export type StackNavigatorParams = {
  home: undefined;
  "user-detail": {
    id: string;
  };
}

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export function NativeNavigation() {
  return (
    <Stack.Navigator>
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
}
