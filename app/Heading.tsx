import React from "react";

import * as styles from "./Heading.css";

export function Heading({ children }: React.PropsWithChildren) {
	return <h2 className={styles.heading}>{children}</h2>;
}
