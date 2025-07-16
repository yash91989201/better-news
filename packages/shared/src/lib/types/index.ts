import type z from "zod";
import type {
	CommentSchema,
	CommentUpvoteSchema,
	InsertCommentSchema,
	InsertCommentUpvoteSchema,
	InsertPostSchema,
	InsertPostUpvoteSchema,
	PostSchema,
	PostUpvoteSchema,
} from "@/lib/schema";

export type PostType = z.infer<typeof PostSchema>;
export type PostUpvoteType = z.infer<typeof PostUpvoteSchema>;
export type CommentUpvoteType = z.infer<typeof CommentUpvoteSchema>;
export type CommentType = z.infer<typeof CommentSchema>;

export type InsertPostType = z.infer<typeof InsertPostSchema>;
export type InsertCommentType = z.infer<typeof InsertCommentSchema>;
export type InsertCommentUpvoteType = z.infer<typeof InsertCommentUpvoteSchema>;
export type InsertPostUpvoteType = z.infer<typeof InsertPostUpvoteSchema>;
