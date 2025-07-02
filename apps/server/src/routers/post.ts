import { paginationSchema } from "@shared/lib/schema";
import {
	and,
	asc,
	countDistinct,
	desc,
	eq,
	getTableColumns,
	sql,
} from "drizzle-orm";
import { user } from "@/db/schema/auth";
import { insertPostSchema, postTable } from "@/db/schema/post";
import { postUpvoteTable } from "@/db/schema/upvote";
import { getISOFormatDateQuery } from "@/lib";
import { protectedProcedure, publicProcedure } from "@/lib/orpc";
import {
	CreatePostOutput,
	GetPostOutput,
	UpvotePostInput,
	UpvotePostOutput,
} from "@/lib/schema";
import type { GetPostOutputType } from "@/lib/types";

export const postRouter = {
	create: protectedProcedure
		.input(insertPostSchema)
		.output(CreatePostOutput)
		.handler(async ({ context, input }) => {
			try {
				const userId = context.session.user.id;

				const [newPost] = await context.db
					.insert(postTable)
					.values({
						...input,
						userId,
					})
					.returning();

				return {
					success: true,
					message: "Post created successfully",
					data: newPost,
				};
			} catch (error) {
				if (error instanceof Error) {
					return {
						success: false,
						message: error.message,
						data: undefined,
					};
				}

				return {
					success: false,
					message: "An unexpected error occurred",
				};
			}
		}),
	getAll: publicProcedure
		.input(paginationSchema)
		.output(GetPostOutput)
		.handler(async ({ context, input }): Promise<GetPostOutputType> => {
			const currentUser = context.session?.user;
			const { limit, order, page, sortBy, author, site } = input;

			const offset = (page - 1) * limit;

			const sortByColumn =
				sortBy === "points" ? postTable.points : postTable.createdAt;

			const sortOrder =
				order === "asc" ? asc(sortByColumn) : desc(sortByColumn);

			const [postCount] = await context.db
				.select({ count: countDistinct(postTable.id) })
				.from(postTable)
				.where(
					and(
						author ? eq(postTable.userId, author) : undefined,
						site ? eq(postTable.url, site) : undefined,
					),
				);

			const postQuery = context.db
				.select({
					...getTableColumns(postTable),
					createdAt: getISOFormatDateQuery(postTable.createdAt),
					author: {
						id: user.id,
						username: user.name,
					},
					isUpvoted: user
						? sql<boolean>`CASE WHEN ${postUpvoteTable.userId} IS NOT NULL THEN true ELSE false END`
						: sql<boolean>`false`,
				})
				.from(postTable)
				.leftJoin(user, eq(postTable.userId, user.id))
				.orderBy(sortOrder)
				.limit(limit)
				.offset(offset)
				.where(
					and(
						author ? eq(postTable.userId, author) : undefined,
						site ? eq(postTable.url, site) : undefined,
					),
				);

			if (currentUser) {
				postQuery.leftJoin(
					postUpvoteTable,
					and(
						eq(postUpvoteTable.postId, postTable.id),
						eq(postUpvoteTable.userId, currentUser.id),
					),
				);
			}

			const posts = await postQuery;

			return {
				status: true,
				message: "Posts fetched successfully",
				pagination: {
					page,
					totalPages: Math.ceil(postCount.count / limit),
				},
				data: posts,
			};
		}),
	upvote: protectedProcedure
		.input(UpvotePostInput)
		.output(UpvotePostOutput)
		.handler(async ({ context, input }) => {
			try {
				const currentUser = context.session.user;

				let pointsChange: -1 | 1 = 1;
				const points = await context.db.transaction(async (tx) => {
					const [existingUpvote] = await tx
						.select()
						.from(postUpvoteTable)
						.where(
							and(
								eq(postUpvoteTable.postId, input.postId),
								eq(postUpvoteTable.userId, currentUser.id),
							),
						)
						.limit(1);

					pointsChange = existingUpvote ? -1 : 1;

					const [updatedPost] = await tx
						.update(postTable)
						.set({
							points: sql`${postTable.points} + ${pointsChange}`,
						})
						.where(eq(postTable.id, input.postId))
						.returning();

					if (!updatedPost) {
						throw new Error("Post not found");
					}

					if (existingUpvote) {
						await tx
							.delete(postUpvoteTable)
							.where(eq(postUpvoteTable.id, existingUpvote.id));
					} else {
						await tx.insert(postUpvoteTable).values({
							postId: input.postId,
							userId: currentUser.id,
						});
					}

					return updatedPost.points;
				});

				return {
					success: true,
					message: "Upvote registered successfully",
					data: {
						points,
						isUpvoted: pointsChange === 1,
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
					message: "An unexpected error occurred",
				};
			}
		}),
};
