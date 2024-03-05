import { Link } from "@remix-run/react";
import React from "react";

import { HeroHeading } from "~/HeroHeading";

import * as styles from "./Layout.css";

export interface LayoutProps extends React.PropsWithChildren {
	back?: boolean;
	title: string;
}

export function Layout({ back, children, title }: LayoutProps) {
	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<HeroHeading>{title}</HeroHeading>
				{back && <Link to="/">Boston TS ⬅️</Link>}
			</header>
			<main className={styles.main}>{children}</main>
			<footer>
				<Link to="/about">About</Link>
				<Link to="/code-of-conduct">Code of Conduct</Link>
			</footer>
		</div>
	);
}
