import type { LinksFunction } from "@remix-run/node";

import { cssBundleHref } from "@remix-run/css-bundle";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import clsx from "clsx";

import "./raw.css";
import * as styles from "./root.css";
import { themeClass } from "./styles.css.js";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ href: cssBundleHref, rel: "stylesheet" }] : []),
];

export default function App() {
	return (
		<html className={clsx(styles.html, themeClass)} lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />

				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
