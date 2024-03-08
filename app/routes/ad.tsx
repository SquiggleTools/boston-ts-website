import { MetaFunction } from "@remix-run/node";

import { AdGrid } from "~/components/AdGrid";
import { description, title } from "~/config";

export const meta: MetaFunction = () => {
	return [
		{ title: `Ad | ${title}` },
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

export default function Ad() {
	return <AdGrid />;
}
