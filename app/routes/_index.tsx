import { useLoaderData } from "@remix-run/react";
import { LinksFunction, MetaFunction, json } from "@vercel/remix";

import { EventsList } from "~/components/EventsList";
import { Layout } from "~/components/Layout";
import { createMeta } from "~/config";
import { eventSchema } from "~/schemas";

export const loader = async () => {
	const events = (await import("../data/events.json")).default.map((event) => ({
		...event,
		date: new Date(event.date),
	}));

	// This assumes we'll always have a rebuild of the site after an event change.
	// Surely this assumption tied to datetime logic will never come back to haunt us.
	const now = new Date().getTime();

	return json(
		events
			.filter((event) => event.date.getTime() > now)
			.sort((a, b) => a.date.getTime() - b.date.getTime()),
	);
};

export const links: LinksFunction = () => {
	return [
		{ href: "/favicon.ico", rel: "icon" },
		{ href: "https://mastodon.social/@BostonTS", rel: "me" },
	];
};

export const meta: MetaFunction = () => createMeta();

export default function Index() {
	const events = useLoaderData<typeof loader>();

	return (
		<Layout title={["Boston", "TS Club"]}>
			<EventsList
				active
				descriptor="Upcoming"
				events={events.map((event) => eventSchema.parse(event))}
			/>
		</Layout>
	);
}
