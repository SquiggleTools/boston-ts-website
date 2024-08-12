import { z } from "zod";

export const eventSchema = z.object({
	date: z.coerce.date(),
	link: z.string(),
	location: z.string(),
	time: z.string(),
	topics: z.array(
		z.object({
			title: z.string(),
			// TODO: Remove `.nullish()` when all authors have been added
			author: z.string().nullish(),
		}),
	),
});

export type EventData = z.infer<typeof eventSchema>;
