import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { userTable } from "./auth";
import { commentTable } from "./comment";
import { postUpvoteTable } from "./upvote";

export const postTable = pgTable("post", {
	id: serial().primaryKey(),
	userId: text().notNull(),
	title: text().notNull(),
	url: text(),
	content: text(),
	points: integer().notNull().default(0),
	commentCount: integer().notNull().default(0),
	createdAt: timestamp({
		withTimezone: true,
	})
		.notNull()
		.defaultNow(),
});

export const postRelations = relations(postTable, ({ one, many }) => ({
	author: one(userTable, {
		fields: [postTable.userId],
		references: [userTable.id],
	}),
	postUpvotes: many(postUpvoteTable, {
		relationName: "postUpvotes",
	}),
	comments: many(commentTable, {
		relationName: "post",
	}),
}));

export const postSchema = createSelectSchema(postTable);

export const insertPostSchema = createInsertSchema(postTable, {
	title: z.string().min(3, { error: "Title must be at least 3 chars long" }),
	url: z.url().or(z.literal("")).optional(),
	content: z.string().optional(),
});
