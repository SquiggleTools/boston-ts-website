import { style } from "@vanilla-extract/css";

import { breakpoints } from "~/styles.css";

export const layout = style({
	"@media": {
		[breakpoints.medium]: {
			display: "grid",
			gridTemplateColumns: "auto 60%",
			gridTemplateRows: "auto auto",
		},
	},
	display: "flex",
	flexDirection: "column",
	height: "100%",
	padding: "2rem",
	width: "100%",
});

export const footer = style({
	gridArea: "2 / 2 / 3 / 3",
});

export const header = style({
	"@media": {
		[breakpoints.medium]: {
			textAlign: "right",
		},
	},
});

export const main = style({
	gridArea: "1 / 1 / 3 / 2",
});
