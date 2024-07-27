import { region } from "~/config";
import { EventData } from "~/schemas";

import { AnchorWithArrow } from "./AnchorWithArrow";
import * as styles from "./EventDetails.css";

export interface EventDetailsProps {
	active?: boolean;
	event: EventData;
}

export function EventDetails({ active, event }: EventDetailsProps) {
	function formatDate(date: Date) {
		const weekday = date.toLocaleString(region.locale, { weekday: "long" });
		const day = date.toLocaleString(region.locale, { day: "numeric" });
		const month = date.toLocaleString(region.locale, { month: "long" });
		const year = date.toLocaleString(region.locale, { year: "numeric" });

		return `${weekday} ${day} ${month} ${year}`;
	}

	return (
		<article className={styles.article}>
			<h3 className={styles.heading}>{formatDate(event.date)}</h3>
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
