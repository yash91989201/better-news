import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod";
import { commentTable, commentUpvoteTable, postTable, postUpvoteTable, } from "@/db/schema";
export const PostSchema = createSelectSchema(postTable);
export const PostUpvoteSchema = createSelectSchema(postUpvoteTable);
export const CommentUpvoteSchema = createSelectSchema(commentUpvoteTable);
export const CommentSchema = createSelectSchema(commentTable);
export const InsertPostSchema = createInsertSchema(postTable);
export const InsertCommentSchema = createInsertSchema(commentTable);
export const InsertCommentUpvoteSchema = createInsertSchema(commentUpvoteTable);
export const InsertPostUpvoteSchema = createInsertSchema(postUpvoteTable);
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
export const CreatePostOutput = z.object({
    success: z.boolean(),
    message: z.string(),
    data: PostSchema.optional(),
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
    data: z.array(PostSchema).optional(),
});
export const CreateCommentInput = InsertCommentSchema.extend({
    id: z.number(),
    parentCommentId: z.number().optional(),
});
export const CreateCommentOutput = z.object({
    success: z.boolean(),
    message: z.string(),
    data: CommentSchema.extend({
        childComments: z.array(CommentSchema).optional(),
        commentUpvotes: z.array(CommentUpvoteSchema).optional(),
        author: z.object({
            name: z.string(),
            id: z.string(),
        }),
    }).optional(),
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
export const CommentResponseSchema = CommentSchema.extend({
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
