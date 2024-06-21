import { style } from "@vanilla-extract/css";

export const aside = style({
	"::before": {
		alignItems: "center",
		bottom: 0,
		content: "💡",
		display: "flex",
		fontStyle: "initial",
		left: 0,
		position: "absolute",
		top: 0,
	},
	fontStyle: "italic",
	fontWeight: "normal",
	margin: "3rem 0 1rem",
	paddingLeft: "3rem",
	position: "relative",
});
