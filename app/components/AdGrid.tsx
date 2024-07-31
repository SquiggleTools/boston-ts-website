import * as styles from "./AdGrid.css";
import { AdLogo } from "./AdLogo";

export interface AdGridProps {
	month: string;
	year: number;
}

export function AdGrid({ month, year }: AdGridProps) {
	return (
		<main className={styles.adGrid}>
			<div className={styles.imageArea}>
				<AdLogo className={styles.image} />
			</div>
			<div className={styles.text}>
				<h1 className={styles.h1}>
					Boston <span className={styles.together}>TS Club</span>
				</h1>
				<p className={styles.p}>
					{month} {year}
				</p>
			</div>
		</main>
	);
}
