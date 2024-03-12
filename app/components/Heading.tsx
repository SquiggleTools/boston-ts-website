import clsx from "clsx";
import React from "react";

import * as styles from "./Heading.css";

export interface HeadingProps extends React.PropsWithChildren {
	className?: string;
	level: keyof typeof styles.heading;
}

export function Heading({ children, className, level }: HeadingProps) {
	return <h2 className={clsx(styles.heading[level], className)}>{children}</h2>;
}
