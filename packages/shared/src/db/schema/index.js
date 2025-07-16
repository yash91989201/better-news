import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { userTable } from "./auth";
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
export const commentUpvoteRelations = relations(commentUpvoteTable, ({ one }) => ({
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
}));
export const commentTable = pgTable("comment", {
    id: serial().primaryKey(),
    content: text().notNull(),
    depth: integer().notNull().default(0),
    commentCount: integer().notNull().default(0),
    points: integer().notNull().default(0),
    createdAt: timestamp({
        mode: "date",
        withTimezone: true,
    })
        .notNull()
        .defaultNow(),
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
