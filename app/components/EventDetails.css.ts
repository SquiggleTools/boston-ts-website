import { style } from "@vanilla-extract/css";

export const article = style({
	borderLeft: "1rem solid currentcolor",
	padding: "0.75rem 0 0.25rem 1.5rem",
});

export const heading = style({
	marginBottom: "1rem",
});

export const list = style({
	display: "flex",
	flexDirection: "column",
	gap: "0.75rem",
	lineHeight: "2.75rem",
	margin: "clamp(1rem, 5vw, 2rem) 0",
});
