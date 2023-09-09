import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Button } from "tamagui";

export default function Layout() {
  const router = useRouter();

  return (
    <Tabs>
      <Tabs.Screen
        name="tab1"
        options={{
          title: "Tab 1",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="one-up"
                {...props}
              />
            );
          },
          headerLeft() {
            return (
              <Button
                ml="$2.5"
                onPress={() => router.push("/")}
              >
                <MaterialCommunityIcons name="arrow-left" />
              </Button>
            );
          }
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: "Tab 2",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="two-factor-authentication"
                {...props}
              />
            );
          },
          headerLeft() {
            return (
              <Button
                ml="$2.5"
                onPress={() => router.push("/")}
              >
                <MaterialCommunityIcons name="arrow-left" />
              </Button>
            );
          }
        }}
      />
    </Tabs>
  );
}
