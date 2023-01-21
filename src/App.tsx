import "expo-dev-client";

import { useFonts } from "expo-font";
import { FC } from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";

import { NativeNavigation } from "./navigation";
import { Provider } from "./provider";

const App: FC = () => {
	const [loaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
	});

	function handleUnhandledTouches() {
		Keyboard.dismiss();
		return false;
	}

	if (!loaded) {
		return null;
	}

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			onStartShouldSetResponder={handleUnhandledTouches}
		>
			<Provider>
				<NativeNavigation />
			</Provider>
		</KeyboardAvoidingView>
	);
};

export default App;
