import { FC } from "react";
import { H4, YStack } from "tamagui";

type UserDetailProps = {
	id: string;
};

export const UserDetails: FC<UserDetailProps> = ({ id }) => {
	return (
		<YStack
			alignItems="center"
			space="$1"
		>
			<H4 textTransform="capitalize">{id !== "" ? id : "John Doe"}</H4>
		</YStack>
	);
};
