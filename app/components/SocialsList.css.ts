import { style } from "@vanilla-extract/css";

export const socialsList = style({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	listStyleType: "none",
	paddingLeft: 0,
});

export const anchor = style({
	display: "flex",
	justifyContent: "flex-start",
});

export const logo = style({
	height: "1rem",
	marginRight: "1.5rem",
	width: "1rem",
});

export const arrow = style({
	height: "1em",
	marginLeft: "0.5em",
	width: "1em",
});
