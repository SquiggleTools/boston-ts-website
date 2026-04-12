import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "~/styles.css";

const base = style({
	fontWeight: vars.weights.hero,
	textTransform: "uppercase",
});

const sizes = {
	normal: vars.sizes.hero.normal,
	reduced: vars.sizes.hero.reduced,
};

export type HeroHeadingSize = keyof typeof sizes;

export const heroHeading = styleVariants(sizes, (variant) => [
	base,
	{
		fontSize: variant,
	},
]);
