import { style } from "@vanilla-extract/css";

export const socialsList = style({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	listStyleType: "none",
	paddingLeft: 0,
});

export const logo = style({
	height: "1rem",
	marginRight: "1.5rem",
	width: "1rem",
});
