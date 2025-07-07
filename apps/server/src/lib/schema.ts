import { paginationSchema } from "@shared/lib/schema";
import z from "zod/v4";
import { commentSchema, insertCommentSchema } from "@/db/schema/comment";
import { postSchema } from "@/db/schema/post";
import { commentUpvoteSchema } from "@/db/schema/upvote";

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
	data: z.array(postSchema).optional(),
});

export const CreateCommentInput = insertCommentSchema.extend({
	id: z.number(),
	parentCommentId: z.number().optional(),
});

export const CreateCommentOutput = z.object({
	success: z.boolean(),
	message: z.string(),
	data: commentSchema
		.extend({
			childComments: z.array(commentSchema).optional(),
			commentUpvotes: z.array(commentUpvoteSchema).optional(),
			author: z.object({
				name: z.string(),
				id: z.string(),
			}),
		})
		.optional(),
});

export const UpvoteCommentInput = z.object({
	commentId: z.number(),
});

export const UpvoteCommentOutput = z.object({
	success: z.boolean(),
	message: z.string(),
	data: z
		.object({
			points: z.number(),
			commentUpvotes: z.array(z.object({ userId: z.string() })),
		})
		.optional(),
});

export const GetCommentsInput = paginationSchema.extend({
	id: z.number(),
});

export const CommentResponseSchema = commentSchema.extend({
	commentUpvotes: z.array(z.object({ userId: z.string() })),
	author: z.object({
		name: z.string(),
		id: z.string(),
	}),
	createdAt: z.date(),
	get childComments() {
		return z.array(CommentResponseSchema).optional();
	},
});

export const GetCommentsOutput = z.object({
	success: z.boolean(),
	message: z.string(),
	data: z.array(CommentResponseSchema).optional(),
	pagination: z.object({
		page: z.number(),
		totalPages: z.number(),
	}),
});
