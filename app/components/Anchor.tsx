import { NavLink, NavLinkProps } from "@remix-run/react";
import clsx from "clsx";

import * as styles from "./Anchor.css";

export type AnchorVariant = keyof typeof styles.anchor;

export interface InternalAnchorProps extends NavLinkProps {
	variant: AnchorVariant;
}

export function InternalAnchor({
	className,
	variant,
	...props
}: InternalAnchorProps) {
	return (
		<NavLink {...props} className={clsx(styles.anchor[variant], className)} />
	);
}

export interface ExternalAnchorProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant: AnchorVariant;
}

export function ExternalAnchor({
	className,
	variant,
	...props
}: ExternalAnchorProps) {
	return <a {...props} className={clsx(styles.anchor[variant], className)} />;
}
