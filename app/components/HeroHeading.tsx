import React from "react";

import * as styles from "./HeroHeading.css";
import { HeroHeadingSize } from "./HeroHeading.css";

export interface HeroHeadingProps extends React.PropsWithChildren {
	size?: HeroHeadingSize;
}

export function HeroHeading({ children, size = "normal" }: HeroHeadingProps) {
	return <h1 className={styles.heroHeading[size]}>{children}</h1>;
}
