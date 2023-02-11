import { X } from "@tamagui/lucide-icons";
import { Adapt, Button, Dialog, Sheet, Unspaced, YStack } from "tamagui";

import { InputDemo } from "./input";

export function DialogDemo() {
	return (
		<Dialog modal>
			<Dialog.Trigger asChild>
				<Button>Edit Profile</Button>
			</Dialog.Trigger>

			<Adapt
				when="sm"
				platform="touch"
			>
				<Sheet modal>
					<Sheet.Frame
						padding="$4"
						space
					>
						<Adapt.Contents />
					</Sheet.Frame>
					<Sheet.Overlay backgroundColor="$gray12Light" />
				</Sheet>
			</Adapt>

			<Dialog.Portal>
				<Dialog.Overlay
					key="overlay"
					animation="quick"
					o={0.5}
					enterStyle={{ o: 0 }}
					exitStyle={{ o: 0 }}
				/>

				<Dialog.Content
					bordered
					key="content"
					animation={[
						"quick",
						{
							opacity: {
								overshootClamping: true
							}
						}
					]}
					enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
					exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
					space
				>
					<Dialog.Title>Edit profile</Dialog.Title>
					<Dialog.Description>
						Make changes to your profile here. Click save when you're done.
					</Dialog.Description>

					<InputDemo
						fieldId="usernamea"
						label="Form Input"
						placeholder="John Doe"
					/>

					<YStack mt="$2">
						<Dialog.Close
							displayWhenAdapted
							asChild
						>
							<Button
								theme="green_Button"
								aria-label="Close"
							>
								Save changes
							</Button>
						</Dialog.Close>
					</YStack>

					<Unspaced>
						<Dialog.Close asChild>
							<Button
								pos="absolute"
								t="$2"
								r="$2"
								size="$3"
								circular
								icon={X}
							/>
						</Dialog.Close>
					</Unspaced>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog>
	);
}
