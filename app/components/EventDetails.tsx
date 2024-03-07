import { region } from "~/config";
import { EventData } from "~/schemas";

import { Arrow } from "./Arrow";
import * as styles from "./EventDetails.css";

export interface EventDetailsProps {
	event: EventData;
}

export function EventDetails({ event }: EventDetailsProps) {
	const formatter = new Intl.DateTimeFormat(region.locale, {
		day: "numeric",
		month: "long",
		timeZone: region.timeZone,
	});

	return (
		<article className={styles.article}>
			<h3 className={styles.heading}>{formatter.format(event.date)}</h3>
			<div>{event.location}</div>
			<ul className={styles.list}>
				{event.topics.map((topic) => (
					<li key={topic}>{topic}</li>
				))}
			</ul>
			<a href={event.link} rel="noreferrer" target="_blank">
				Register Now
				<Arrow label="Out arrow" variant="out" />
			</a>
		</article>
	);
}
