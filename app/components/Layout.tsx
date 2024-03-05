import React from "react";

import { HeroHeading } from "~/HeroHeading";

import { Anchor } from "./Anchor";
import { Arrow } from "./Arrow";
import * as styles from "./Layout.css";

export interface LayoutProps extends React.PropsWithChildren {
	back?: boolean;
	title: string | string[];
}

export function Layout({ back, children, title }: LayoutProps) {
	const titles = Array.isArray(title) ? title : [title];

	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<HeroHeading>
					{titles.map((text, i) => (
						<>
							<span className={styles.together}>{text}</span>
							{i === titles.length - 1 ? "" : " "}
						</>
					))}
				</HeroHeading>
				{back && (
					<Anchor to="/">
						Boston TS
						<Arrow />
					</Anchor>
				)}
			</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<Anchor reloadDocument to="/about">
					About
				</Anchor>
				<span className={styles.dot} />
				<Anchor reloadDocument to="/code-of-conduct">
					Code of Conduct
				</Anchor>
			</footer>
		</div>
	);
}
