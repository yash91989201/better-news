import z from "zod/v4";
import { postSchema } from "@/db/schema/post";

export const CreatePostOutput = z.object({
	success: z.boolean(),
	message: z.string(),
	data: postSchema.optional(),
});

export const UpvotePostInput = z.object({ postId: z.number() });

export const UpvotePostOutput = z.object({
	success: z.boolean(),
	message: z.string(),
	data: z
		.object({
			points: z.number(),
			isUpvoted: z.boolean(),
		})
		.optional(),
});

export const GetPostOutput = z.object({
	status: z.boolean(),
	message: z.string(),
	pagination: z.object({
		page: z.number(),
		totalPages: z.number(),
	}),
	data: z.array(postSchema.extend({ createdAt: z.string() })).optional(),
});
