import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod/v4";
import { userTable } from "./auth";
import { postTable } from "./post";
import { commentUpvoteTable } from "./upvote";

export const commentTable = pgTable("comment", {
	id: serial().primaryKey(),
	content: text().notNull(),
	depth: integer().notNull().default(0),
	commentCount: integer().notNull().default(0),
	points: integer().notNull().default(0),
	createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
	userId: text().notNull(),
	postId: text().notNull(),
	parentCommentId: integer(),
});

export const commentRelations = relations(commentTable, ({ one, many }) => ({
	author: one(userTable, {
		fields: [commentTable.userId],
		references: [userTable.id],
	}),
	post: one(postTable, {
		fields: [commentTable.postId],
		references: [postTable.id],
	}),
	commentUpvotes: many(commentUpvoteTable, {
		relationName: "commentUpvotes",
	}),
	parentComment: one(commentTable, {
		fields: [commentTable.parentCommentId],
		references: [commentTable.id],
		relationName: "childComments",
	}),
	childComments: many(commentTable, {
		relationName: "childComments",
	}),
}));

export const commentSchema = createSelectSchema(commentTable);

export const insertCommentSchema = createInsertSchema(commentTable, {
	content: z
		.string()
		.min(3, { error: "Comment must be at least 3 chars long" }),
});
