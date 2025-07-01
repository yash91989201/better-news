import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth";
import { commentTable } from "./comment";
import { postTable } from "./post";

export const postUpvoteTable = pgTable("post_upvote", {
	id: serial().primaryKey(),
	postId: integer().notNull(),
	userId: text().notNull(),
	createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});

export const postUpvoteRelations = relations(postUpvoteTable, ({ one }) => ({
	post: one(postTable, {
		fields: [postUpvoteTable.postId],
		references: [postTable.id],
		relationName: "postUpvotes",
	}),
	user: one(user, {
		fields: [postUpvoteTable.userId],
		references: [user.id],
		relationName: "user",
	}),
}));

export const commentUpvoteTable = pgTable("comment_upvote", {
	id: serial().primaryKey(),
	commentId: integer().notNull(),
	userId: text().notNull(),
	createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});

export const commentUpvoteRelations = relations(
	commentUpvoteTable,
	({ one }) => ({
		post: one(commentTable, {
			fields: [commentUpvoteTable.commentId],
			references: [commentTable.id],
			relationName: "commentUpvotes",
		}),
		user: one(user, {
			fields: [commentUpvoteTable.userId],
			references: [user.id],
			relationName: "user",
		}),
	}),
);
