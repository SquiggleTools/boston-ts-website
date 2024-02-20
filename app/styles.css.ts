import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
	color: {
		background: "#3178c6",
		foreground: "#ffffff",
	},
	sizes: {
		hero: "10rem",
	},
});
