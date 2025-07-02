import { z } from "zod/v4";

export const sortBySchema = z.enum(["points", "recent"]);
export const orderSchema = z.enum(["asc", "desc"]);

export const paginationSchema = z.object({
	limit: z.number().optional().default(10),
	page: z.number().optional().default(1),
	sortBy: sortBySchema.optional().default("points"),
	order: orderSchema.optional().default("desc"),
	author: z.string().optional(),
	site: z.string().optional(),
});
