import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "~/styles.css";

const base = style({
	fontSize: vars.sizes.medium,
	textUnderlineOffset: "0.1em",
});

export const anchor = styleVariants({
	default: [base],
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
});
