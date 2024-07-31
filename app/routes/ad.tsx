import { MetaFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";

import { AdGrid } from "~/components/AdGrid";
import { createMeta } from "~/config";

export const meta: MetaFunction = () => createMeta({ page: "Ad" });

function useYearAndMonth() {
	const [searchParams] = useSearchParams();

	const currentDate = new Date();

	const month =
		searchParams.get("month") ??
		currentDate.toLocaleString("default", { month: "long" });

	const paramYear = searchParams.get("year");
	const parsedYear = paramYear ? parseInt(paramYear, 10) : null;

	const currentYear = currentDate.getFullYear();
	const year = !parsedYear || isNaN(parsedYear) ? currentYear : parsedYear;

	return { month, year };
}

export default function Ad() {
	const { month, year } = useYearAndMonth();

	return <AdGrid month={month} year={year} />;
}
