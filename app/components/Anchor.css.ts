import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "~/styles.css";

const base = style({
	fontSize: vars.sizes.medium,
});

export const anchor = styleVariants({
	heavy: [
		base,
		{
			fontWeight: vars.weights.large,
			selectors: {
				"&:active, &.active": {
					textDecoration: "underline",
				},
			},
		},
	],
	underline: [
		base,
		{
			textDecoration: "underline",
			textUnderlineOffset: "0.15em",
		},
	],
});
