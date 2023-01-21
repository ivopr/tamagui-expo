import { NavigationContainer } from "@react-navigation/native";
import { Suspense } from "react";
import { TamaguiProvider } from "tamagui";

import config from "../tamagui.config";

export const Provider: FCC = ({ children }) => {
	return (
		<TamaguiProvider config={config}>
			<Suspense>
				<NavigationContainer>{children}</NavigationContainer>
			</Suspense>
		</TamaguiProvider>
	);
};
