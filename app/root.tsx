import type { LinksFunction } from "@remix-run/node";

import { cssBundleHref } from "@remix-run/css-bundle";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import clsx from "clsx";

import { HeroHeading } from "./HeroHeading.js";
import * as styles from "./root.css";
import { themeClass } from "./styles.css.js";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ href: cssBundleHref, rel: "stylesheet" }] : []),
];

export default function App() {
	return (
		<html className={clsx(styles.html, themeClass)}>
			<head>
				<link href="data:image/x-icon;base64,AA" rel="icon" />
				<Meta />
				<Links />
			</head>
			<body>
				<HeroHeading>Hello world!</HeroHeading>
				<Outlet />

				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
