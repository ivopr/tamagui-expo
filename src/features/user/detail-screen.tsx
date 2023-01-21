import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { YStack } from "tamagui";

import { UserDetails } from "./user-details";

export const UserDetailScreen: FC<
	NativeStackScreenProps<StackNavigatorParams, "user-detail">
> = ({ route }) => {
	const { id } = route.params;

	return (
		<YStack
			backgroundColor="$backgroundStrong"
			height="100%"
			flex={1}
			padding="$4"
			space
		>
			<UserDetails id={id} />
		</YStack>
	);
};
