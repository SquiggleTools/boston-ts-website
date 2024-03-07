import { style } from "@vanilla-extract/css";

import { breakpoints } from "~/styles.css";

export const heading = style({
	"@media": {
		[breakpoints.medium]: {
			marginTop: "0",
		},
	},

	margin: "3rem 0",
});
