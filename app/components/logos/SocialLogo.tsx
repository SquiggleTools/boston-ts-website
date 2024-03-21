import clsx from "clsx";

import * as styles from "./SocialLogo.css";

export type SocialLogoProps = React.SVGAttributes<SVGGElement>;

export function SocialLogo({ className, ...props }: SocialLogoProps) {
	return (
		<svg
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			className={clsx(styles.socialLogo, className)}
		/>
	);
}
