import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Github, Twitter } from "@tamagui/lucide-icons";
import { FC } from "react";
import {
	Anchor,
	H1,
	ListItem,
	Paragraph,
	Separator,
	YGroup,
	YStack
} from "tamagui";

import { MyStack } from "../../components/MyStack";
import { LinkToUser } from "./link-to-user";

export const HomeScreen: FC<
	NativeStackScreenProps<StackNavigatorParams, "home">
> = ({ navigation }) => {
	return (
		<MyStack>
			<YStack
				space="$4"
				maxWidth={600}
			>
				<H1 textAlign="center">Welcome to Tamagui.</H1>
				<Paragraph textAlign="center">
					Here's a basic starter to show navigating from one screen to another.
				</Paragraph>
			</YStack>

			<YStack space="$5">
				<LinkToUser navigation={navigation} />
				<YGroup
					width="100%"
					separator={<Separator />}
				>
					<ListItem icon={Twitter}>
						<Anchor
							href="https://twitter.com/natebirdman"
							target="_blank"
						>
							Nate
						</Anchor>
					</ListItem>
					<ListItem icon={Github}>
						<Anchor
							href="https://github.com/tamagui/tamagui"
							target="_blank"
							rel="noreferrer"
						>
							Tamagui
						</Anchor>
					</ListItem>
					<ListItem icon={Github}>
						<Anchor
							href="https://github.com/ivopr/tamagui-expo"
							target="_blank"
							rel="noreferrer"
						>
							Template
						</Anchor>
					</ListItem>
				</YGroup>
			</YStack>
		</MyStack>
	);
};
