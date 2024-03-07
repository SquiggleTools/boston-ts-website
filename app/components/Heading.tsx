import clsx from "clsx";
import React from "react";

import * as styles from "./Heading.css";

export interface HeadingProps extends React.PropsWithChildren {
	className?: string;
}

export function Heading({ children, className }: HeadingProps) {
	return <h2 className={clsx(styles.heading, className)}>{children}</h2>;
}
