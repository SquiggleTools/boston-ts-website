import { style } from "@vanilla-extract/css";

import { vars } from "./styles.css";

export const html = style({
	background: vars.color.background,
	color: vars.color.foreground,
});
