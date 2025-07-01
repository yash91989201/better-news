import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth";
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
	parentCommentId: integer().notNull().default(0),
});

export const commentRelations = relations(commentTable, ({ one, many }) => ({
	author: one(user, {
		fields: [commentTable.userId],
		references: [user.id],
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
