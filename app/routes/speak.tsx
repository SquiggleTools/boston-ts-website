import { MetaFunction } from "@remix-run/node";

import { InternalAnchor } from "~/components/Anchor";
import { AnchorWithArrow } from "~/components/AnchorWithArrow";
import { Aside } from "~/components/Aside";
import { BodyText } from "~/components/BodyText";
import { Heading } from "~/components/Heading";
import { Layout } from "~/components/Layout";
import { UnorderedList } from "~/components/UnorderedList";
import { createMeta } from "~/config";

const tagline = `No prior experience or TypeScript expertise required!`;

export const meta: MetaFunction = () => createMeta({ page: "Speak", tagline });

export default function About() {
	return (
		<Layout back title="Speak">
			<Heading level={2}>Speak at Boston TS Club</Heading>
			<BodyText>{tagline}</BodyText>
			<BodyText>
				We're looking for anything of interest to TypeScript developers,
				including non-TypeScript general points. See:
			</BodyText>
			<BodyText>
				<AnchorWithArrow
					href="https://docs.google.com/forms/d/1QhKIccKVMhEw3htkjwL78190GDFOaYYPAYdcxyLI4AQ"
					rel="noreferrer"
					target="_blank"
				>
					Boston TS Club Speaking Form
				</AnchorWithArrow>
			</BodyText>
			<BodyText>All we ask is:</BodyText>
			<UnorderedList>
				<li>
					Present a dry run of your talk the week before, so we can check it for
					accessibility issues and make sure it runs the expected duration:
					<ul>
						<li>Main talk: 20 minutes</li>
						<li>Lightning talk: 10 minutes</li>
					</ul>
				</li>
				<li>Arrive at the meetup before it starts</li>
				<li>Be prepared to chat about your talk with attendees</li>
				<li>
					Provide us with a name, talk description, talk title, and optionally:
					avatar, personal URL, and any social media profiles to share
				</li>
			</UnorderedList>
			<BodyText>
				We're happy to give you all the support you need for a great experience,
				including talk ideation, slides review, and feedback on a dry run. 💙
			</BodyText>
			<Aside>
				Tip: see <InternalAnchor to="/events">Events</InternalAnchor> for
				references of past talks others have given.
			</Aside>
		</Layout>
	);
}
