import { Link, LinkProps } from "@remix-run/react";
import clsx from "clsx";

import * as styles from "./Anchor.css";

export function Anchor(props: LinkProps) {
	return <Link {...props} className={clsx(styles.anchor, props.className)} />;
}
