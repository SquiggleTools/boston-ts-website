import { Fragment, ReactNode } from "react";

interface OxfordCommaListProps {
	items: readonly ReactNode[];
}

export function OxfordCommaList({ items }: OxfordCommaListProps) {
	if (items.length === 0) {
		return null;
	}

	if (items.length === 1) {
		return <>{items[0]}</>;
	}

	if (items.length === 2) {
		return (
			<>
				{items[0]} and {items[1]}
			</>
		);
	}

	return (
		<>
			{items.slice(0, -1).map((item, index) => (
				<Fragment key={index}>
					{item}
					{index < items.length - 2 ? ", " : ", and "}
				</Fragment>
			))}
			{items[items.length - 1]}
		</>
	);
}
