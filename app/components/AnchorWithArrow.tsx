import { ExternalAnchor } from "./Anchor";
import * as styles from "./AnchorWithArrow.css";
import { Arrow } from "./Arrow";

export type AnchorWithArrowProps =
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function AnchorWithArrow({ children, href }: AnchorWithArrowProps) {
	return (
		<ExternalAnchor
			className={styles.anchor}
			href={href}
			rel="noreferrer"
			target="_blank"
			variant="heavy"
		>
			{children}
			<Arrow className={styles.arrow} label="" variant="out" />
		</ExternalAnchor>
	);
}
