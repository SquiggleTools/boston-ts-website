import { MetaFunction } from "@remix-run/node";

import { ExternalAnchor } from "~/components/Anchor";
import { BodyText } from "~/components/BodyText";
import { Heading } from "~/components/Heading";
import { Layout } from "~/components/Layout";
import { UnorderedList } from "~/components/UnorderedList";
import { createMeta } from "~/config";

const tagline = `Get your name and branding in front of Boston's most active and engaged TypeScript developer community!`;

export const meta: MetaFunction = () =>
	createMeta({ page: "Sponsor", tagline });

export default function About() {
	return (
		<Layout back title="Sponsor">
			<Heading level={2}>Sponsor Boston TS Club</Heading>

			<BodyText>
				Thinking about sponsoring us? Awesome! We're excited to work with you
				and are grateful for your support!
			</BodyText>

			<Heading level={3}>Why sponsor us?</Heading>

			<BodyText>{tagline}</BodyText>

			<BodyText>As a meetup sponsor, you'll receive:</BodyText>

			<UnorderedList>
				<li>A featured mention in our opening slides</li>
				<li>A dedicated talk slot to showcase your product</li>
				<li>Shout-outs on our social media profiles</li>
				<li>The opportunity to distribute your swag at our events</li>
			</UnorderedList>

			<BodyText>
				We're flexible! If you want to try something different, let us know,
				we'd love to make it happen! 💙
			</BodyText>

			<Heading level={3}>Ready to team up?</Heading>

			<BodyText>
				<ExternalAnchor href="mailto:sponsor@bostonts.club" target="_blank">
					Email us
				</ExternalAnchor>{" "}
				to get started.
			</BodyText>
		</Layout>
	);
}
