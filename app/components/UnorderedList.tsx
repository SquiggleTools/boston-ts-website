import clsx from "clsx";
import React from "react";

import * as styles from "./UnorderedList.css";

export interface UnorderedListProps extends React.PropsWithChildren {
	className?: string;
}

export function UnorderedList({ children, className }: UnorderedListProps) {
	return <ul className={clsx(styles.unorderedList, className)}>{children}</ul>;
}
