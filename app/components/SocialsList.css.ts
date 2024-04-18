import { style } from "@vanilla-extract/css";

import { breakpoints } from "~/styles.css";

export const socialsList = style({
	"@media": {
		[breakpoints.medium]: {
			justifyContent: "space-between",
			marginTop: "0.5rem",
		},
	},
	display: "flex",
	gap: "1rem",
	listStyleType: "none",
	margin: 0,
	paddingLeft: 0,
});

export const logo = style({
	height: "1rem",
	width: "1rem",
});
