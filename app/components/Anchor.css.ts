import { style } from "@vanilla-extract/css";

import { vars } from "~/styles.css";

export const anchor = style({
	fontSize: vars.sizes.medium,
	fontWeight: vars.weights.large,
	selectors: {
		"&:active, &.active": {
			textDecoration: "underline",
		},
	},
});
