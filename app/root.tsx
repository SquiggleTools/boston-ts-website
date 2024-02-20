import type { LinksFunction } from "@remix-run/node";

import { cssBundleHref } from "@remix-run/css-bundle";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";

import { HeroHeading } from "./HeroHeading.js";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ href: cssBundleHref, rel: "stylesheet" }] : []),
];

export default function App() {
	return (
		<html>
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
