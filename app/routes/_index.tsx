import { MetaFunction } from "@remix-run/node";

import { Layout } from "~/components/Layout";
import { description, title } from "~/constants";

export const meta: MetaFunction = () => {
	return [
		{ title },
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

export default function Index() {
	return <Layout title={["Boston", "TS Club"]}>Hello, world!</Layout>;
}
