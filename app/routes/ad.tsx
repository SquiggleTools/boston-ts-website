import { MetaFunction } from "@remix-run/node";

import { AdGrid } from "~/components/AdGrid";
import { site } from "~/config";

export const meta: MetaFunction = () => {
	return [
		{ title: `Ad | ${site.title}` },
		{
			content: site.description,
			name: "description",
		},
		{
			content: site.title,
			property: "og:title",
		},
	];
};

export default function Ad() {
	return <AdGrid />;
}
