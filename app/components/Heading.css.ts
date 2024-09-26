import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "~/styles.css";

const base = style({
	fontWeight: vars.weights.large,
});

export const heading = styleVariants({
	2: [
		base,
		{
			fontSize: vars.sizes.heading,
			lineHeight: vars.lineHeights.heading,
		},
	],
	3: [
		base,
		{
			fontSize: vars.sizes.large,
			lineHeight: vars.lineHeights.medium,
			marginTop: "3rem",
		},
	],
});
