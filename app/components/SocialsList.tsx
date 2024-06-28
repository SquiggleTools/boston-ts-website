import { ExternalAnchor } from "./Anchor";
import * as styles from "./SocialsList.css";
import { BlueskyLogo } from "./logos/BlueskyLogo";
import { DiscordLogo } from "./logos/DiscordLogo";
import { LinkedInLogo } from "./logos/LinkedInLogo";
import { MastodonLogo } from "./logos/MastodonLogo";
import { TwitterLogo } from "./logos/TwitterLogo";
import { GitHubLogo } from "./logos/GitHubLogo";

const socials = [
	{
		href: "https://bsky.app/profile/bostonts.club",
		logo: BlueskyLogo,
		text: "Bluesky",
	},
	{
		href: "https://discord.gg/kKTDgeaWmZ",
		logo: DiscordLogo,
		text: "Discord",
	},
	{
		href: "https://www.linkedin.com/groups/13008308",
		logo: LinkedInLogo,
		text: "LinkedIn",
	},
	{
		href: "https://mastodon.social/@BostonTS",
		logo: MastodonLogo,
		text: "Mastodon",
	},
	{
		href: "https://twitter.com/BosTypeScript",
		logo: TwitterLogo,
		text: "Twitter",
	},
	{
		href: "https://github.com/SquiggleTools/boston-ts-website",
		logo: GitHubLogo,
		text: "GitHub",
	},
];

export function SocialsList() {
	return (
		<ul className={styles.socialsList}>
			{socials.map(({ href, logo: Logo, text }) => (
				<li key={href}>
					<ExternalAnchor href={href} rel="me" variant="heavy">
						<Logo aria-label={text} className={styles.logo} />
					</ExternalAnchor>
				</li>
			))}
		</ul>
	);
}
