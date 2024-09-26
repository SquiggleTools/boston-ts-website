import clsx from "clsx";
import React from "react";

import * as styles from "./Heading.css";

export interface HeadingProps extends React.PropsWithChildren {
	className?: string;
	level: keyof typeof styles.heading;
}

export function Heading({ children, className, level }: HeadingProps) {
	if (level === 2) {
		return <h2 className={clsx(styles.heading[2], className)}>{children}</h2>;
	} else {
		return <h3 className={clsx(styles.heading[3], className)}>{children}</h3>;
	}
}
