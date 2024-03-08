import { style } from "@vanilla-extract/css";

import { breakpoints, vars } from "~/styles.css";

export const adGrid = style({
	"@media": {
		[breakpoints.medium]: {
			flexDirection: "row",
			margin: "auto",
			maxWidth: "max(70%, 60rem)",
		},
	},
	alignItems: "center",
	display: "flex",
	flexDirection: "column",
	gap: "3rem",
	height: "100%",
	justifyContent: "center",
	padding: "2rem",
	width: "100%",
});

export const imageArea = style({
	"@media": {
		[breakpoints.medium]: {
			display: "flex",
			justifyContent: "flex-end",
			width: "50%",
		},
	},
});

export const image = style({
	"@media": {
		[breakpoints.medium]: {
			height: "40vh",
			width: "40vh",
		},
	},

	height: "min(50vw, 50vh)",
	width: "min(50vw, 50vh)",
});

export const text = style({
	"@media": {
		[breakpoints.medium]: {
			textAlign: "left",
			width: "50%",
		},
	},

	textAlign: "center",
});

export const together = style({
	"@media": {
		[breakpoints.medium]: {
			display: "block",
		},
	},
	display: "inline-block",
});

export const h1 = style({
	"@media": {
		[breakpoints.medium]: {
			fontSize: `clamp(5rem, 9vw, 8rem)`,
			fontWeight: "700",
		},
	},

	fontSize: vars.sizes.heading,
});

export const p = style({
	fontSize: vars.sizes.medium,
	marginTop: "1rem",
	textTransform: "uppercase",
});
