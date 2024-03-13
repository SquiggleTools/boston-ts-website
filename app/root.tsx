import type { LinksFunction, MetaFunction } from "@remix-run/node";

import { cssBundleHref } from "@remix-run/css-bundle";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import clsx from "clsx";

import { site } from "./config";
import "./raw.css";
import * as styles from "./root.css";
import { themeClass } from "./styles.css.js";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ href: cssBundleHref, rel: "stylesheet" }] : []),
];

export const meta: MetaFunction = () => {
	return [
		{ charSet: "utf-8" },
		{ content: "width=device-width,initial-scale=1", name: "viewport" },
		{ content: site.description, name: "description" },
		{ content: site.title, name: "title" },
		{ content: "website", property: "og:type" },
		{ content: `${site.baseURL}/assets/social.png`, property: "og:image" },
		{ content: site.longTitle, property: "og:title" },
		{ content: site.baseURL, property: "og:url" },
		{ content: "summary", property: "twitter:card" },
		{ content: `${site.baseURL}/assets/social.png`, property: "twitter:image" },
		{ content: site.baseURL, property: "twitter:url" },
		{ content: site.description, property: "twitter:description" },
		{ content: site.longTitle, property: "twitter:title" },
	];
};

export default function App() {
	return (
		<html className={clsx(styles.html, themeClass)}>
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
