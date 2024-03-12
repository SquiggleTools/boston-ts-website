import { NavLink, NavLinkProps } from "@remix-run/react";
import clsx from "clsx";

import * as styles from "./Anchor.css";

export interface AnchorProps extends NavLinkProps {
	variant: keyof typeof styles.anchor;
}

export function Anchor({ className, variant, ...props }: AnchorProps) {
	return (
		<NavLink {...props} className={clsx(styles.anchor[variant], className)} />
	);
}
