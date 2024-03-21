import { InternalAnchor } from "./Anchor";
import { Arrow } from "./Arrow";
import * as styles from "./SocialsList.css";
import { BlueskyLogo } from "./logos/BlueskyLogo";
import { LinkedInLogo } from "./logos/LinkedInLogo";
import { MastodonLogo } from "./logos/MastodonLogo";
import { TwitterLogo } from "./logos/TwitterLogo";

const socials = [
	{
		logo: BlueskyLogo,
		text: "Bluesky",
		to: "https://bsky.app/profile/bostonts.club",
	},
	{
		logo: LinkedInLogo,
		text: "LinkedIn",
		to: "https://www.linkedin.com/groups/13008308",
	},
	{
		logo: MastodonLogo,
		text: "Mastodon",
		to: "https://mastodon.social/@BostonTS",
	},
	{
		logo: TwitterLogo,
		text: "Twitter",
		to: "https://twitter.com/BosTypeScript",
	},
];

export function SocialsList() {
	return (
		<ul className={styles.socialsList}>
			{socials.map(({ logo: Logo, text, ...props }) => (
				<li key={props.to}>
					<InternalAnchor {...props} rel="me" target="_blank" variant="heavy">
						<Logo className={styles.logo} />
						{text}
						<Arrow className={styles.arrow} label="" variant="out" />
					</InternalAnchor>
				</li>
			))}
		</ul>
	);
}
