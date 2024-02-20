import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
	return (
		<html>
			<head>
				<link href="data:image/x-icon;base64,AA" rel="icon" />
				<Meta />
				<Links />
			</head>
			<body>
				<h1>Hello world!</h1>
				<Outlet />

				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
