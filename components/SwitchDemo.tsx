import { Label, Switch, XStack } from "tamagui";

export function SwitchDemo() {
  return (
    <XStack
      alignItems="center"
      justifyContent="space-between"
      space="$4"
    >
      <Label
        htmlFor="switch-demo"
        flex={1}
        height="$2"
        lineHeight="$2"
      >
        Dark mode
      </Label>
      <Switch
        id="switch-demo"
        size="$4"
      >
        <Switch.Thumb animation="quick" />
      </Switch>
    </XStack>
  );
}
