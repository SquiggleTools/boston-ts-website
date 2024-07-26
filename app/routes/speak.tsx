import { MetaFunction } from "@remix-run/node";

import { InternalAnchor } from "~/components/Anchor";
import { AnchorWithArrow } from "~/components/AnchorWithArrow";
import { Aside } from "~/components/Aside";
import { BodyText } from "~/components/BodyText";
import { Heading } from "~/components/Heading";
import { Layout } from "~/components/Layout";
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
			<BodyText>
				All we ask is:
				<ul>
					<li>
						Send us your slides 24 hours in advance, so we can check them for
						accessibility
					</li>
					<li>Be prepared to chat about your talk with attendees</li>
				</ul>
			</BodyText>
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
