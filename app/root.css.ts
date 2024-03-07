import { style } from "@vanilla-extract/css";

import { background, foreground, vars } from "./styles.css";

export const html = style({
	"@media": {
		"(prefers-color-scheme: dark)": {
			vars: {
				[background]: vars.color.blue,
				[foreground]: vars.color.white,
			},
		},
	},
	background,
	color: foreground,
	fontWeight: vars.weights.normal,
	vars: {
		[background]: vars.color.white,
		[foreground]: vars.color.blue,
	},
});
