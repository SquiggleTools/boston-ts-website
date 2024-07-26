import { MetaFunction } from "@remix-run/node";

import { ExternalAnchor } from "~/components/Anchor";
import { BodyText } from "~/components/BodyText";
import { Heading } from "~/components/Heading";
import { Layout } from "~/components/Layout";
import { createMeta, site } from "~/config";

const tagline = `We meet once every month or two to chat about our favorite typed superset of JavaScript.`;

export const meta: MetaFunction = () => createMeta({ page: "About", tagline });

export default function About() {
	return (
		<Layout back title="About">
			<Heading level={2}>{site.description}</Heading>
			<BodyText>{tagline}</BodyText>
			<BodyText>
				We welcome all developers of all experience and skill levels to connect,
				learn new things, and show off their work.
			</BodyText>
			<BodyText>We're happy for you to join us.</BodyText>
			<Heading level={3}>The Team</Heading>
			<BodyText>
				Reach us over{" "}
				<ExternalAnchor href="mailto:contact@bostonts.club" target="_blank">
					email
				</ExternalAnchor>{" "}
				or{" "}
				<ExternalAnchor href="https://discord.gg/kKTDgeaWmZ" target="_blank">
					Discord
				</ExternalAnchor>
				.
			</BodyText>
			<ul>
				<li>
					<strong>Josh Goldberg</strong>
				</li>
				<li>
					<strong>Mariah Goldberg</strong>
				</li>
				<li>
					<strong>David Blass</strong>
				</li>
				<li>
					<strong>Jérémie Astori</strong>
				</li>
			</ul>
			<Heading level={3}>The Website</Heading>
			<BodyText>
				Built with React, Remix, TypeScript, Vanilla Extract, and Vite.
			</BodyText>
		</Layout>
	);
}
