import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";

import { MyStack } from "../../components/MyStack";
import { UserDetails } from "./user-details";

export const UserDetailScreen: FC<
	NativeStackScreenProps<StackNavigatorParams, "user-detail">
> = ({ route }) => {
	const { id } = route.params;

	return (
		<MyStack>
			<UserDetails id={id} />
		</MyStack>
	);
};
