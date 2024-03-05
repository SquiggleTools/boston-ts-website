import { MetaFunction } from "@remix-run/node";

import { Layout } from "~/components/Layout";

export const meta: MetaFunction = () => {
	return [
		{ title: "Boston TS Club" },
		{
			content: "Boston TS Club",
			property: "og:title",
		},
		{
			content:
				"A meetup for JavaScript and TypeScript developers in the Boston, MA area.",
			name: "description",
		},
	];
};

export default function Index() {
	return <Layout title={["Boston", "TS Club"]}>Hello, world!</Layout>;
}
