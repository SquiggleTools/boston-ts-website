import { style, styleVariants } from "@vanilla-extract/css";

const base = style({
	// margin: 0,
});

export const arrow = styleVariants({
	back: [
		base,
		{
			height: "0.7em",
			marginLeft: "0.1em",
			transform: `rotate(180deg)`,
			width: "0.7em",
		},
	],
	out: [
		base,
		{
			height: "1em",
			marginLeft: "0.1em",
			transform: `rotate(-45deg)`,
			width: "1em",
		},
	],
});
