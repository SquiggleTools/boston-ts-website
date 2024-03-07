import clsx from "clsx";
import React from "react";

import * as styles from "./BodyText.css";

export interface BodyTextProps extends React.PropsWithChildren {
	className?: string;
}

export function BodyText({ children, className }: BodyTextProps) {
	return <p className={clsx(styles.bodyText, className)}>{children}</p>;
}
