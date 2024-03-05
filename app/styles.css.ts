import { createTheme } from "@vanilla-extract/css";

export const breakpoints = {
	medium: "screen and (min-width: 1024px)",
};

export const [themeClass, vars] = createTheme({
	color: {
		background: "#3178c6",
		foreground: "#ffffff",
	},
	sizes: {
		hero: `clamp(7rem, 13vw, 15rem)`,
	},
	weights: {
		hero: "900",
	},
});
