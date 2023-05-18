import { Spinner, XStack } from "tamagui";

export default function SpinnerDemo() {
  return (
    <XStack
      padding="$3"
      space="$4"
      ai="center"
    >
      <Spinner
        size="small"
        color="$green10"
      />
      <Spinner
        size="large"
        color="$orange10"
      />
    </XStack>
  );
}
