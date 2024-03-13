export interface MetaSettings {
	page?: string;
	tagline?: string;
}

export const createMeta = ({ page, tagline }: MetaSettings = {}) => {
	const description = tagline ?? site.description;
	const longTitle = [page, site.longTitle].filter(Boolean).join(" | ");
	const title = [page, site.title].filter(Boolean).join(" | ");

	return [
		{ charSet: "utf-8" },
		{ content: "width=device-width,initial-scale=1", name: "viewport" },
		{ content: description, name: "description" },
		{ content: title, name: "title" },
		{ content: "website", property: "og:type" },
		{ content: `${site.baseURL}/assets/social.png`, property: "og:image" },
		{ content: longTitle, property: "og:title" },
		{ content: site.baseURL, property: "og:url" },
		{ content: "summary", property: "twitter:card" },
		{ content: `${site.baseURL}/assets/social.png`, property: "twitter:image" },
		{ content: site.baseURL, property: "twitter:url" },
		{ content: description, property: "twitter:description" },
		{ content: longTitle, property: "twitter:title" },
	];
};

export const site = {
	baseURL: "https://bostonts.club",
	description:
		"A meetup for JavaScript and TypeScript developers in the Boston, MA area.",
	domain: "bostonts.com",
	longTitle: "Boston TypeScript Club",
	title: "Boston TS Club",
} as const;

export const region = {
	locale: "en-US",
	timeZone: "UTC",
} as const;
