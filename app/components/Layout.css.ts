import { style } from "@vanilla-extract/css";

import { breakpoints, foreground, vars } from "~/styles.css";

export const layout = style({
	"@media": {
		[breakpoints.medium]: {
			display: "grid",
			gap: "0 2rem",
			gridTemplateColumns: "auto 50%",
			gridTemplateRows: "auto auto",
		},
	},
	display: "flex",
	flexDirection: "column",
	height: "100%",
	padding: "2rem 2rem 0",
	width: "100%",
});

export const header = style({
	"@media": {
		[breakpoints.medium]: {
			position: "fixed",
			right: "2rem",
			textAlign: "right",
			top: "2rem",
			width: "50%",
			zIndex: "1",
		},
	},
});

export const together = style({
	display: "inline-block",
});

export const footer = style({
	"@media": {
		[breakpoints.medium]: {
			bottom: "1rem",
			paddingBottom: "0",
			position: "fixed",
			right: "2rem",
		},
	},
	paddingBottom: "1rem",
});

export const footerLinks = style({
	"@media": {
		[breakpoints.medium]: {
			alignItems: "flex-end",
			flexDirection: "row",
			justifyContent: "space-between",
			textAlign: "right",
		},
	},
	display: "flex",
	flexDirection: "column",
	gap: "0.25rem",
	justifyContent: "flex-end",
	paddingBottom: "1rem",
});

export const dot = style({
	"@media": {
		[breakpoints.medium]: {
			background: foreground,
			borderRadius: "100%",
			display: "inline-block",
			height: "0.85rem",
			margin: "0 1rem 1rem",
			width: "0.85rem",
		},
	},
	display: "block",
});

export const main = style({
	"@media": {
		[breakpoints.medium]: {
			margin: "0",
		},
	},
	flexGrow: "9001",
	fontSize: vars.sizes.medium,
	gridArea: "1 / 1 / 3 / 2",
	lineHeight: vars.lineHeights.medium,
	margin: "clamp(1rem, 3vh, 3rem) 0",
	wordBreak: "break-word",
});
