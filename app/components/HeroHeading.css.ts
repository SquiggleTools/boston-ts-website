import { style } from "@vanilla-extract/css";

import { vars } from "./styles.css";

export const heroHeading = style({
	fontSize: vars.sizes.hero,
	fontWeight: vars.weights.hero,
	textTransform: "uppercase",
});
