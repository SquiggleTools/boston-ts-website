import { style } from "@vanilla-extract/css";

import { vars } from "./styles.css";

export const heading = style({
	fontSize: vars.sizes.heading,
	fontWeight: vars.weights.large,
	lineHeight: vars.lineHeights.heading,
});
