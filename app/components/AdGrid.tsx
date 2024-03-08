import * as styles from "./AdGrid.css";
import { AdLogo } from "./AdLogo";

export function AdGrid() {
	return (
		<main className={styles.adGrid}>
			<div className={styles.imageArea}>
				<AdLogo className={styles.image} />
			</div>
			<div className={styles.text}>
				<h1 className={styles.h1}>
					Boston <span className={styles.together}>TS Club</span>
				</h1>
				<p className={styles.p}>April 2024</p>
			</div>
		</main>
	);
}
