import { z } from "zod";

export const eventSchema = z.object({
	date: z.coerce.date(),
	link: z.string(),
	location: z.string(),
	time: z.string(),
	topics: z.array(
		z.object({
			title: z.string(),
			author: z
				.string()
				.or(
					z.object({
						name: z.string(),
						url: z.string().nullish(),
					}),
				)
				.nullish(),
		}),
	),
});

export type EventData = z.infer<typeof eventSchema>;
