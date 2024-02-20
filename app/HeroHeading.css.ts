import { style } from "@vanilla-extract/css";

import { vars } from "./styles.css";

export const root = style({
	fontSize: vars.sizes.hero,
	textAlign: "right",
});
