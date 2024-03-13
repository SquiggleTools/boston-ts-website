import { MetaFunction } from "@remix-run/node";

import { AdGrid } from "~/components/AdGrid";
import { createMeta } from "~/config";

export const meta: MetaFunction = () => createMeta({ page: "Ad" });

export default function Ad() {
	return <AdGrid />;
}
