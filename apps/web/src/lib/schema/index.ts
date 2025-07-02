import { insertPostSchema } from "@server/db/schema/post";

export const createPostSchema = insertPostSchema
	.pick({
		title: true,
		url: true,
		content: true,
	})
	.refine((data) => data.url || data.content, {
		error: "Either url or content must be provided",
		path: ["url", "content"],
	});
