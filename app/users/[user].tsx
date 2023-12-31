import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Button, H6 } from "tamagui";

import DialogDemo from "../../components/DialogDemo";
import { MyStack } from "../../components/MyStack";
import SelectDemo from "../../components/SelectDemo";
import SpinnerDemo from "../../components/SpinnerDemo";
import SwitchDemo from "../../components/SwitchDemo";

export default function User() {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <MyStack justifyContent="flex-start">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: `${params.user}'s user page`,
          headerLeft() {
            return (
              <Button
                mr="$2.5"
                onPress={router.back}
              >
                <MaterialCommunityIcons name="arrow-left" />
              </Button>
            );
          }
        }}
      />

      <H6>Some Tamagui components in action.</H6>

      <DialogDemo />
      <SelectDemo />
      <SpinnerDemo />
      <SwitchDemo />
    </MyStack>
  );
}
