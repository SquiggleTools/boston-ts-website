import { ExternalAnchor } from "./Anchor";
import { Arrow } from "./Arrow";
import * as styles from "./SocialsList.css";
import { BlueskyLogo } from "./logos/BlueskyLogo";
import { LinkedInLogo } from "./logos/LinkedInLogo";
import { MastodonLogo } from "./logos/MastodonLogo";
import { TwitterLogo } from "./logos/TwitterLogo";

const socials = [
	{
		href: "https://bsky.app/profile/bostonts.club",
		logo: BlueskyLogo,
		text: "Bluesky",
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
];

export function SocialsList() {
	return (
		<ul className={styles.socialsList}>
			{socials.map(({ logo: Logo, text, ...props }) => (
				<li key={props.href}>
					<ExternalAnchor
						{...props}
						className={styles.anchor}
						rel="me"
						target="_blank"
						variant="heavy"
					>
						<Logo className={styles.logo} />
						{text}
						<Arrow className={styles.arrow} label="" variant="out" />
					</ExternalAnchor>
				</li>
			))}
		</ul>
	);
}
