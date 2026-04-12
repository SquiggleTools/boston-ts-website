import React from "react";

import { HeroHeading } from "~/components/HeroHeading";

import { InternalAnchor } from "./Anchor";
import { Arrow } from "./Arrow";
import { HeroHeadingSize } from "./HeroHeading.css";
import * as styles from "./Layout.css";
import { SocialsList } from "./SocialsList";

export interface LayoutProps extends React.PropsWithChildren {
	back?: boolean;
	headingSize?: HeroHeadingSize;
	title: string | string[];
}

export function Layout({ back, children, headingSize, title }: LayoutProps) {
	const titles = Array.isArray(title) ? title : [title];

	return (
		<div className={styles.layout}>
			<header className={styles.header}>
				<HeroHeading size={headingSize}>
					{titles.map((text, i) => (
						<React.Fragment key={text}>
							<span className={styles.together}>{text}</span>
							{i === titles.length - 1 ? "" : " "}
						</React.Fragment>
					))}
				</HeroHeading>
				{back && (
					<InternalAnchor to="/" variant="heavy">
						Boston TypeScript Club
						<Arrow label="Back arrow" variant="back" />
					</InternalAnchor>
				)}
			</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<div className={styles.footerLinks}>
					<InternalAnchor reloadDocument to="/about" variant="heavy">
						About
					</InternalAnchor>
					<span className={styles.dot} />
					<InternalAnchor reloadDocument to="/events" variant="heavy">
						Events
					</InternalAnchor>
					<span className={styles.dot} />
					<InternalAnchor reloadDocument to="/speak" variant="heavy">
						Speak
					</InternalAnchor>
				</div>
				<div className={styles.footerLinks}>
					<InternalAnchor reloadDocument to="/code-of-conduct" variant="heavy">
						Code of Conduct
					</InternalAnchor>
					<span className={styles.dot} />
					<InternalAnchor reloadDocument to="/faq" variant="heavy">
						FAQ
					</InternalAnchor>
				</div>
				<SocialsList />
			</footer>
		</div>
	);
}
