import { Toast, useToast } from "@tamagui/toast";
import { Button, XStack, YStack } from "tamagui";

export const ToastDemo = () => {
  return (
    <YStack
      space
      alignItems="center"
    >
      <ToastControl native />
      <CurrentToast />
    </YStack>
  );
};

const CurrentToast = () => {
  const { currentToast } = useToast();

  if (!currentToast || currentToast.isHandledNatively) return null;
  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation="quick"
    >
      <YStack>
        <Toast.Title>{currentToast.title}</Toast.Title>
        {!!currentToast.message && (
          <Toast.Description>{currentToast.message}</Toast.Description>
        )}
      </YStack>
    </Toast>
  );
};

const ToastControl = ({ native }: { native: boolean }) => {
  const toast = useToast();
  return (
    <XStack
      space="$2"
      justifyContent="center"
    >
      <Button
        theme="green_alt2_Button"
        color="#ffffff"
        onPress={() => {
          toast.show("Successfully saved!", {
            message: "Don't worry, we've got your data.",
            native
          });
        }}
        width="100%"
      >
        Show Toast
      </Button>
    </XStack>
  );
};
