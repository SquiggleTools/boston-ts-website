import { EventData } from "~/schemas";

import { EventDetails } from "./EventDetails";
import * as styles from "./EventsList.css";
import { Heading } from "./Heading";

export interface EventsListProps {
	active?: boolean;
	descriptor: "All" | "Upcoming";
	events: EventData[];
}

export function EventsList({ active, descriptor, events }: EventsListProps) {
	return (
		<>
			<Heading className={styles.heading} level={2}>
				{descriptor} Event{events.length === 1 ? "" : "s"}
			</Heading>

			<div className={styles.events}>
				{events.length
					? events.map((event) => (
							<EventDetails active={active} event={event} key={event.link} />
						))
					: "Still in the works. Let us know if you'd like to help organize!"}
			</div>
		</>
	);
}
