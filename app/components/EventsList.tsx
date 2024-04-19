import { EventData } from "~/schemas";

import { EventDetails } from "./EventDetails";
import * as styles from "./EventsList.css";
import { Heading } from "./Heading";

export interface EventsListProps {
	events: EventData[];
}

export function EventsList({ events }: EventsListProps) {
	return (
		<>
			<Heading className={styles.heading} level={2}>
				Upcoming Event{events.length === 1 ? "" : "s"}
			</Heading>

			{events.length
				? events.map((event) => <EventDetails event={event} key={event.link} />)
				: "Still in the works. Let us know if you'd like to help organize!"}
		</>
	);
}
