import React from "react";

import * as styles from "./HeroHeading.css";

export function HeroHeading({ children }: React.PropsWithChildren) {
	return <h1 className={styles.heroHeading}>{children}</h1>;
}
