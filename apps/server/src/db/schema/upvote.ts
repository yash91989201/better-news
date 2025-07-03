import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { userTable } from "./auth";
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
	user: one(userTable, {
		fields: [postUpvoteTable.userId],
		references: [userTable.id],
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
		user: one(userTable, {
			fields: [commentUpvoteTable.userId],
			references: [userTable.id],
			relationName: "user",
		}),
	}),
);

export const postUpvoteSchema = createSelectSchema(postUpvoteTable);
export const commentUpvoteSchema = createSelectSchema(commentUpvoteTable);
