import { style } from "@vanilla-extract/css";

import { vars } from "~/styles.css";

export const bodyText = style({
	fontSize: vars.sizes.medium,
	fontWeight: vars.weights.light,
	lineHeight: vars.lineHeights.light,
	margin: "2rem 0",
	textWrap: "balance",
});
