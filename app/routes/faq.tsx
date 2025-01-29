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

			<Heading level={3}>What is the parking situation at your events?</Heading>
			<BodyText>
				When meeting at the Microsoft NERD Center, you can park along the water
				in front of the entrance, or in pay-to-park nearby. There is also a paid
				parking garage in the building.
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

			<Heading level={3}>Is there a Code of Conduct?</Heading>
			<BodyText>
				Yes! You will find the details on how we promote a respectful and
				inclusive environment to all on our{" "}
				<InternalAnchor to="/code-of-conduct">Code of Conduct</InternalAnchor>.
			</BodyText>
		</Layout>
	);
}
