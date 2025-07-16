import { commentTable, commentUpvoteTable, postTable } from "@shared/db/schema";
import {
	CreateCommentInput,
	CreateCommentOutput,
	GetCommentsInput,
	GetCommentsOutput,
	UpvoteCommentInput,
	UpvoteCommentOutput,
} from "@shared/lib/schema";
import {
	and,
	asc,
	countDistinct,
	desc,
	eq,
	getTableColumns,
	sql,
} from "drizzle-orm";
import { protectedProcedure, publicProcedure } from "@/lib/orpc";

export const commentRouter = {
	create: protectedProcedure
		.input(CreateCommentInput)
		.output(CreateCommentOutput)
		.handler(async ({ context, input }) => {
			try {
				const { id, content } = input;
				const currentUser = context.session.user;

				const [comment] = await context.db.transaction(async (tx) => {
					const [parentComment] = await tx
						.select({
							id: commentTable.id,
							postId: commentTable.postId,
							depth: commentTable.depth,
						})
						.from(commentTable)
						.where(eq(commentTable.id, id))
						.limit(1);

					if (!parentComment) {
						throw new Error("Comment not found");
					}

					const postId = parentComment.postId;

					const [updatedParentComment] = await tx
						.update(commentTable)
						.set({ commentCount: sql`${commentTable.commentCount} + 1` })
						.where(eq(commentTable.id, id))
						.returning();

					const [updatedPost] = await tx
						.update(postTable)
						.set({ commentCount: sql`${postTable.commentCount} + 1` })
						.where(eq(postTable.id, Number(postId)))
						.returning();

					if (!updatedPost || !updatedParentComment) {
						throw new Error("Post not found");
					}

					return await tx
						.insert(commentTable)
						.values({
							content,
							userId: currentUser.id,
							postId,
							parentCommentId: parentComment.id,
							depth: parentComment.depth + 1,
						})
						.returning({
							...getTableColumns(commentTable),
							parentCommentId: commentTable.parentCommentId,
							commentCount: commentTable.commentCount,
						});
				});

				return {
					success: true,
					message: "Comment created successfully",
					data: {
						...comment,
						author: {
							id: currentUser.id,
							name: currentUser.name,
						},
					},
				};
			} catch (error) {
				if (error instanceof Error) {
					return {
						success: false,
						message: error.message,
					};
				}

				return {
					success: false,
					message: "An error occurred while creating the comment.",
				};
			}
		}),
	getComments: publicProcedure
		.input(GetCommentsInput)
		.output(GetCommentsOutput)
		.handler(async ({ context: ctx, input }) => {
			const currentUser = ctx.session?.user;
			const { id, limit, order, page, sortBy } = input;

			const offset = (page - 1) * limit;

			const sortByColumn =
				sortBy === "points" ? commentTable.points : commentTable.createdAt;

			const sortOrder =
				order === "desc" ? desc(sortByColumn) : asc(sortByColumn);

			const [commentCount] = await ctx.db
				.select({ count: countDistinct(commentTable.id) })
				.from(commentTable)
				.where(eq(commentTable.parentCommentId, id));

			const comments = await ctx.db.query.commentTable.findMany({
				where: eq(commentTable.parentCommentId, id),
				orderBy: sortOrder,
				limit,
				offset,
				with: {
					author: {
						columns: {
							name: true,
							id: true,
						},
					},
					commentUpvotes: {
						columns: { userId: true },
						where: eq(commentUpvoteTable.userId, currentUser?.id ?? ""),
					},
				},
			});

			return {
				success: true,
				message: "Comments retrieved successfully",
				data: comments,
				pagination: {
					page,
					totalPages: Math.ceil(commentCount.count / limit),
				},
			};
		}),
	upvote: protectedProcedure
		.input(UpvoteCommentInput)
		.output(UpvoteCommentOutput)
		.handler(async ({ context, input }) => {
			try {
				const currentUser = context.session.user;

				let pointsChange: -1 | 1 = 1;
				const points = await context.db.transaction(async (tx) => {
					const [existingUpvote] = await tx
						.select()
						.from(commentUpvoteTable)
						.where(
							and(
								eq(commentUpvoteTable.commentId, input.commentId),
								eq(commentUpvoteTable.userId, currentUser.id),
							),
						)
						.limit(1);

					pointsChange = existingUpvote ? -1 : 1;

					const [updatedComment] = await tx
						.update(commentTable)
						.set({
							points: sql`${commentTable.points} + ${pointsChange}`,
						})
						.where(eq(commentTable.id, input.commentId))
						.returning();

					if (!updatedComment) {
						throw new Error("Comment not found");
					}

					if (existingUpvote) {
						await tx
							.delete(commentUpvoteTable)
							.where(eq(commentUpvoteTable.id, existingUpvote.id));
					} else {
						await tx.insert(commentUpvoteTable).values({
							commentId: input.commentId,
							userId: currentUser.id,
						});
					}

					return updatedComment.points;
				});

				return {
					success: true,
					message: "Comment upvoted successfully",
					data: {
						points,
						commentUpvotes:
							pointsChange === 1 ? [{ userId: currentUser.id }] : [],
					},
				};
			} catch (error) {
				if (error instanceof Error) {
					return {
						success: false,
						message: error.message,
					};
				}

				return {
					success: false,
					message: "An error occurred while upvoting the comment.",
				};
			}
		}),
};
