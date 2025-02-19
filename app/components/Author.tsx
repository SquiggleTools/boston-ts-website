import type { AuthorData } from "~/schemas";

import { AnchorWithArrow } from "./AnchorWithArrow";

interface AuthorProps {
	author: AuthorData;
}

export function Author({ author }: AuthorProps) {
	return author.url ? (
		<AnchorWithArrow href={author.url}>{author.name}</AnchorWithArrow>
	) : (
		author.name
	);
}
