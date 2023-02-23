import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider
} from "@mantine/core";
import { useState } from "react";

interface ThemeProviderProps {
	children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme,
					primaryColor: "dark",
					components: {
						Container: {
							defaultProps: {
								sizes: {
									xs: 540,
									sm: 720,
									md: 960,
									lg: 1140,
									xl: 1320
								}
							}
						}
					}
				}}
			>
				{children}
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
