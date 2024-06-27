import clsx from "clsx";
import React from "react";

import * as styles from "./Aside.css";

export interface AsideProps extends React.PropsWithChildren {
	className?: string;
}

export function Aside({ children, className }: AsideProps) {
	return <aside className={clsx(styles.aside, className)}>{children}</aside>;
}
