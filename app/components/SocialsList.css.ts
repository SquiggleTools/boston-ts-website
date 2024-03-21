import { style } from "@vanilla-extract/css";

export const socialsList = style({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	listStyleType: "none",
	paddingLeft: 0,
});

export const logo = style({
	marginRight: "1rem",
	verticalAlign: "text-top",
});

export const arrow = style({
	height: "1.75rem",
	marginLeft: "0.5rem",
	verticalAlign: "text-top",
	width: "1.75rem",
});
