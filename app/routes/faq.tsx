import { MetaFunction } from "@remix-run/node";

import { ExternalAnchor, InternalAnchor } from "~/components/Anchor";
import { Aside } from "~/components/Aside";
import { BodyText } from "~/components/BodyText";
import { Heading } from "~/components/Heading";
import { Layout } from "~/components/Layout";
import { createMeta } from "~/config";

export const meta: MetaFunction = () =>
	createMeta({ page: "Frequently Asked Questions" });

export default function FAQ() {
	return (
		<Layout back title="FAQ">
			<Heading level={2}>Frequently Asked Questions</Heading>

			<Heading level={3}>Can I attend if I don't know TypeScript?</Heading>
			<BodyText>
				Absolutely! We prep our speakers to know not all attendees will know it.
				We'd love to have you join our community regardless of experience.
			</BodyText>

			<Heading level={3}>
				How do I get to your events by public transit?
			</Heading>
			<BodyText>
				We recommend taking the Red Line to the Kendall/MIT Station, which is a
				five minute walk away from the{" "}
				<a href="https://maps.app.goo.gl/7TMY5xxytpEHh6CX7">
					Microsoft NERD center
				</a>
				.
				<br />
				There are also several e-bike stations around the building.
			</BodyText>

			<Heading level={3}>How do I park at your events?</Heading>
			<BodyText>
				When meeting at the{" "}
				<a href="https://maps.app.goo.gl/7TMY5xxytpEHh6CX7">
					Microsoft NERD center
				</a>
				, you can park along the water in front of the entrance, or in
				pay-to-park nearby. There is also a paid parking garage in the building.
			</BodyText>

			<Aside>
				The City of Cambridge maintains a{" "}
				<ExternalAnchor
					href="https://www.cambridgema.gov/iwantto/parkacarincambridge/map"
					rel="noreferrer"
					target="_blank"
				>
					map of all parking meters, lots, and garages
				</ExternalAnchor>
				. Neat!
			</Aside>

			<Heading level={3}>Is there a dress code?</Heading>
			<BodyText>
				Casual street clothing. Most of us wear t-shirts and short/jeans. We
				intentionally do not have a business casual or formal attire vibe.
			</BodyText>

			<Heading level={3}>Is there food?</Heading>
			<BodyText>
				We generally have vegan hors d'oeuvres. You're welcome to bring your own
				food if you need a full meal.
			</BodyText>

			<Heading level={3}>My company would like to sponsor you!</Heading>
			<BodyText>
				That's not really a question, but thank you, very kind of them! Head
				over to our <InternalAnchor to="/sponsor">Sponsor</InternalAnchor> page
				for all the details.
			</BodyText>

			<Heading level={3}>
				I have ideas, how can I give you some feedback?
			</Heading>
			<BodyText>
				Absolutely, we would love to make the club even better! Feel free to
				share your thoughts via the{" "}
				<ExternalAnchor href="/feedback" rel="noreferrer" target="_blank">
					Feedback
				</ExternalAnchor>{" "}
				form.
			</BodyText>
		</Layout>
	);
}
