import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { Separator, YStack } from "tamagui";

import { MyStack } from "../../components/MyStack";
import { AlertDialogDemo } from "./alert-dialog";
import { DialogDemo } from "./dialog";
import { InputDemo } from "./input";
import { SelectDemo } from "./select";
import { UserDetails } from "./user-details";

export const UserDetailScreen: FC<
	NativeStackScreenProps<StackNavigatorParams, "user-detail">
> = ({ route }) => {
	const { id } = route.params;

	return (
		<MyStack
			backgroundColor="$background"
			justifyContent="flex-start"
			separator={<Separator />}
		>
			<UserDetails id={id} />
			<YStack space="$2.5">
				<InputDemo
					fieldId="username12"
					label="Form Input"
					placeholder="John Doe"
				/>
				<AlertDialogDemo />
				<DialogDemo />
				<SelectDemo />
			</YStack>
		</MyStack>
	);
};
