import { createTheme, createVar } from "@vanilla-extract/css";

export const breakpoints = {
	medium: "screen and (min-width: 1024px)",
};

export const background = createVar();
export const foreground = createVar();

export const [themeClass, vars] = createTheme({
	color: {
		blue: "#3178c6",
		white: "#ffffff",
	},
	lineHeights: {
		heading: `0.9em`,
		hero: `1.5em`,
		light: `1.1em`,
		medium: `1em`,
	},
	sizes: {
		heading: `min(clamp(3rem, 6vw, 5rem), 22.5vh)`,
		hero: `min(clamp(7rem, 12vw, 15rem), 30vh)`,
		large: `clamp(2rem, 4vw, 3rem)`,
		medium: `clamp(1.5rem, 4vw, 2.5rem)`,
		subHeading: `clamp(2.5rem, 5vw, 4rem)`,
	},
	weights: {
		hero: "900",
		large: "700",
		light: "500",
		normal: "600",
	},
});
