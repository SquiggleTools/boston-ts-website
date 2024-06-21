import { style } from "@vanilla-extract/css";

import { breakpoints } from "~/styles.css";

export const heading = style({
	"@media": {
		[breakpoints.medium]: {
			marginTop: "0",
		},
	},

	margin: "clamp(0.5rem, 2.5vh, 3rem) 0",
});

export const events = style({
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
});
