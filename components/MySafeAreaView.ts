import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "tamagui";

export const MySafeAreaView = styled(SafeAreaView, {
  name: "MySafeAreaView",
  flex: 1,
  backgroundColor: "$backgroundStrong"
});
