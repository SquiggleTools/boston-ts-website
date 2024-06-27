import { useLoaderData } from "@remix-run/react";
import { MetaFunction, json } from "@vercel/remix";

import { EventsList } from "~/components/EventsList";
import { Layout } from "~/components/Layout";
import { createMeta } from "~/config";
import { eventSchema } from "~/schemas";

export const loader = async () => {
	const events = (await import("../data/events.json")).default.map((event) => ({
		...event,
		date: new Date(event.date),
	}));

	return json(events.sort((a, b) => b.date.getTime() - a.date.getTime()));
};

export const meta: MetaFunction = () => createMeta({ page: "Events" });

export default function About() {
	const events = useLoaderData<typeof loader>();

	return (
		<Layout back title="Events">
			<EventsList
				descriptor="All"
				events={events.map((event) => eventSchema.parse(event))}
			/>
		</Layout>
	);
}
