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
		hero: `clamp(7rem, 12vw, 15rem)`,
		large: `clamp(2rem, 4vw, 3rem)`,
		medium: `clamp(1.5rem, 4vw, 3rem)`,
	},
	weights: {
		hero: "900",
		large: "700",
	},
});
