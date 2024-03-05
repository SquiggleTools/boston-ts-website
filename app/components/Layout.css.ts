import { style } from "@vanilla-extract/css";

import { breakpoints, vars } from "~/styles.css";

export const layout = style({
	"@media": {
		[breakpoints.medium]: {
			display: "grid",
			gridTemplateColumns: "auto 50%",
			gridTemplateRows: "auto auto",
		},
	},
	display: "flex",
	flexDirection: "column",
	height: "100%",
	padding: "2rem",
	width: "100%",
});

export const header = style({
	"@media": {
		[breakpoints.medium]: {
			textAlign: "right",
		},
	},
});

export const together = style({
	display: "inline-block",
});

export const footer = style({
	"@media": {
		[breakpoints.medium]: {
			alignItems: "flex-end",
			flexDirection: "row",
			justifyContent: "flex-end",
			textAlign: "right",
		},
	},
	display: "flex",
	flexDirection: "column",
	gap: "0.25rem",
	height: "100%",
	justifyContent: "flex-end",
});

export const dot = style({
	"@media": {
		[breakpoints.medium]: {
			background: vars.color.foreground,
			borderRadius: "100%",
			display: "inline-block",
			height: "0.85rem",
			margin: "0 1.5rem 1rem",
			width: "0.85rem",
		},
	},
	display: "block",
});

export const main = style({
	fontSize: vars.sizes.medium,
	gridArea: "1 / 1 / 3 / 2",
	wordBreak: "break-word",
});
