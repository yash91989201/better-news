import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth";
import { commentTable } from "./comment";
import { postUpvoteTable } from "./upvote";

export const postTable = pgTable("post", {
	id: serial().primaryKey(),
	userId: text().notNull(),
	title: text().notNull(),
	url: text(),
	content: text().notNull(),
	points: integer().notNull().default(0),
	commentCount: integer().notNull().default(0),
	createdAt: timestamp({
		withTimezone: true,
	})
		.notNull()
		.defaultNow(),
});

export const postRelations = relations(postTable, ({ one, many }) => ({
	author: one(user, {
		fields: [postTable.userId],
		references: [user.id],
	}),
	postUpvotes: many(postUpvoteTable, {
		relationName: "postUpvotes",
	}),
	comments: many(commentTable, {
		relationName: "post",
	}),
}));
