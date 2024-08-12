import { z } from "zod";

export const eventSchema = z.object({
	date: z.coerce.date(),
	link: z.string(),
	location: z.string(),
	time: z.string(),
	topics: z.array(
		// TODO: Retrieve list of all speakers from past events and remove this line
		z.string().or(
			z.object({
				title: z.string(),
				author: z.string(),
			}),
		),
	),
});

export type EventData = z.infer<typeof eventSchema>;
