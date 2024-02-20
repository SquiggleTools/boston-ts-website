import { Link } from "@remix-run/react";
import React from "react";

import { HeroHeading } from "~/HeroHeading";

export interface LayoutProps extends React.PropsWithChildren {
	back?: boolean;
	title: string;
}

export function Layout({ back, children, title }: LayoutProps) {
	return (
		<div>
			<main>
				<HeroHeading>{title}</HeroHeading>
				{back && <Link to="/">Boston TS ⬅️</Link>}
				{children}
			</main>
			<footer>
				<Link to="/about">About</Link>
			</footer>
		</div>
	);
}
