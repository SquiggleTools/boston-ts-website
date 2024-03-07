import { createTheme } from "@vanilla-extract/css";

export const breakpoints = {
	medium: "screen and (min-width: 1024px)",
};

export const [themeClass, vars] = createTheme({
	color: {
		background: "#3178c6",
		foreground: "#ffffff",
	},
	lineHeights: {
		heading: `0.9em`,
		hero: `1.5em`,
		medium: `1em`,
	},
	sizes: {
		heading: `clamp(3rem, 6vw, 5rem)`,
		hero: `min(clamp(7rem, 12vw, 15rem), 30vh)`,
		large: `clamp(2rem, 4vw, 3rem)`,
		medium: `clamp(1.5rem, 4vw, 2.5rem)`,
	},
	weights: {
		hero: "900",
		large: "700",
		normal: "600",
	},
});
