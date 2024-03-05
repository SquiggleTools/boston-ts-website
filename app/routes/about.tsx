import { MetaFunction } from "@remix-run/node";

import { Layout } from "~/components/Layout";
import { description, title } from "~/constants";

export const meta: MetaFunction = () => {
	return [
		{ title: `About | ${title}` },
		{
			content: description,
			name: "description",
		},
		{
			content: title,
			property: "og:title",
		},
	];
};

export default function About() {
	return (
		<Layout back title="About">
			Hello, world!
		</Layout>
	);
}
