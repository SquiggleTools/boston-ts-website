import { region } from "~/config";
import { EventData } from "~/schemas";

import { AnchorWithArrow } from "./AnchorWithArrow";
import * as styles from "./EventDetails.css";

export interface EventDetailsProps {
	active?: boolean;
	event: EventData;
}

export function EventDetails({ active, event }: EventDetailsProps) {
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
			<AnchorWithArrow href={event.link}>
				{active ? "Register Now" : "Event Info"}
			</AnchorWithArrow>
		</article>
	);
}
