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
			<Heading className={styles.heading}>Upcoming Events</Heading>

			{events.map((event) => (
				<EventDetails event={event} key={event.link} />
			))}
		</>
	);
}
