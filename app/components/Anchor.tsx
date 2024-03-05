import { NavLink, NavLinkProps } from "@remix-run/react";
import clsx from "clsx";

import * as styles from "./Anchor.css";

export function Anchor(props: NavLinkProps) {
	return (
		<NavLink {...props} className={clsx(styles.anchor, props.className)} />
	);
}
