import { z } from "zod";

const authorSchema = z.object({
	name: z.string(),
	url: z.string().nullish(),
});

export const eventSchema = z.object({
	date: z.coerce.date(),
	link: z.string().nullish(),
	location: z.string(),
	time: z.string(),
	topics: z
		.array(
			z.object({
				author: authorSchema.or(z.array(authorSchema)).nullish(),
				title: z.string(),
			}),
		)
		.nullish(),
});

export type AuthorData = z.infer<typeof authorSchema>;
export type EventData = z.infer<typeof eventSchema>;
