import * as styles from "./EventsList.css";
import { Heading } from "./Heading";
import { EventDetails } from "./components/EventDetails";
import { EventData } from "./schemas";

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
