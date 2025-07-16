import z from "zod";
export declare const PostSchema: import("drizzle-zod").BuildSchema<
	"select",
	{
		id: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "id";
				tableName: "post";
				dataType: "number";
				columnType: "PgSerial";
				data: number;
				driverParam: number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: true;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		userId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "userId";
				tableName: "post";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		title: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "title";
				tableName: "post";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		url: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "url";
				tableName: "post";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: false;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		content: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "content";
				tableName: "post";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: false;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		points: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "points";
				tableName: "post";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		commentCount: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "commentCount";
				tableName: "post";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		createdAt: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "createdAt";
				tableName: "post";
				dataType: "date";
				columnType: "PgTimestamp";
				data: Date;
				driverParam: string;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
	},
	undefined,
	undefined
>;
export declare const PostUpvoteSchema: import("drizzle-zod").BuildSchema<
	"select",
	{
		id: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "id";
				tableName: "post_upvote";
				dataType: "number";
				columnType: "PgSerial";
				data: number;
				driverParam: number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: true;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		postId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "postId";
				tableName: "post_upvote";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		userId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "userId";
				tableName: "post_upvote";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		createdAt: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "createdAt";
				tableName: "post_upvote";
				dataType: "date";
				columnType: "PgTimestamp";
				data: Date;
				driverParam: string;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
	},
	undefined,
	undefined
>;
export declare const CommentUpvoteSchema: import("drizzle-zod").BuildSchema<
	"select",
	{
		id: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "id";
				tableName: "comment_upvote";
				dataType: "number";
				columnType: "PgSerial";
				data: number;
				driverParam: number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: true;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		commentId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "commentId";
				tableName: "comment_upvote";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		userId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "userId";
				tableName: "comment_upvote";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		createdAt: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "createdAt";
				tableName: "comment_upvote";
				dataType: "date";
				columnType: "PgTimestamp";
				data: Date;
				driverParam: string;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
	},
	undefined,
	undefined
>;
export declare const CommentSchema: import("drizzle-zod").BuildSchema<
	"select",
	{
		id: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "id";
				tableName: "comment";
				dataType: "number";
				columnType: "PgSerial";
				data: number;
				driverParam: number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: true;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		content: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "content";
				tableName: "comment";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		depth: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "depth";
				tableName: "comment";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		commentCount: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "commentCount";
				tableName: "comment";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		points: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "points";
				tableName: "comment";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		createdAt: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "createdAt";
				tableName: "comment";
				dataType: "date";
				columnType: "PgTimestamp";
				data: Date;
				driverParam: string;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		userId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "userId";
				tableName: "comment";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		postId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "postId";
				tableName: "comment";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		parentCommentId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "parentCommentId";
				tableName: "comment";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: false;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
	},
	undefined,
	undefined
>;
export declare const InsertPostSchema: import("drizzle-zod").BuildSchema<
	"insert",
	{
		id: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "id";
				tableName: "post";
				dataType: "number";
				columnType: "PgSerial";
				data: number;
				driverParam: number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: true;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		userId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "userId";
				tableName: "post";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		title: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "title";
				tableName: "post";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		url: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "url";
				tableName: "post";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: false;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		content: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "content";
				tableName: "post";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: false;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		points: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "points";
				tableName: "post";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		commentCount: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "commentCount";
				tableName: "post";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		createdAt: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "createdAt";
				tableName: "post";
				dataType: "date";
				columnType: "PgTimestamp";
				data: Date;
				driverParam: string;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
	},
	undefined,
	undefined
>;
export declare const InsertCommentSchema: import("drizzle-zod").BuildSchema<
	"insert",
	{
		id: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "id";
				tableName: "comment";
				dataType: "number";
				columnType: "PgSerial";
				data: number;
				driverParam: number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: true;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		content: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "content";
				tableName: "comment";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		depth: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "depth";
				tableName: "comment";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		commentCount: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "commentCount";
				tableName: "comment";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		points: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "points";
				tableName: "comment";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		createdAt: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "createdAt";
				tableName: "comment";
				dataType: "date";
				columnType: "PgTimestamp";
				data: Date;
				driverParam: string;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		userId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "userId";
				tableName: "comment";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		postId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "postId";
				tableName: "comment";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		parentCommentId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "parentCommentId";
				tableName: "comment";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: false;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
	},
	undefined,
	undefined
>;
export declare const InsertCommentUpvoteSchema: import("drizzle-zod").BuildSchema<
	"insert",
	{
		id: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "id";
				tableName: "comment_upvote";
				dataType: "number";
				columnType: "PgSerial";
				data: number;
				driverParam: number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: true;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		commentId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "commentId";
				tableName: "comment_upvote";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		userId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "userId";
				tableName: "comment_upvote";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		createdAt: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "createdAt";
				tableName: "comment_upvote";
				dataType: "date";
				columnType: "PgTimestamp";
				data: Date;
				driverParam: string;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
	},
	undefined,
	undefined
>;
export declare const InsertPostUpvoteSchema: import("drizzle-zod").BuildSchema<
	"insert",
	{
		id: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "id";
				tableName: "post_upvote";
				dataType: "number";
				columnType: "PgSerial";
				data: number;
				driverParam: number;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: true;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		postId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "postId";
				tableName: "post_upvote";
				dataType: "number";
				columnType: "PgInteger";
				data: number;
				driverParam: string | number;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		userId: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "userId";
				tableName: "post_upvote";
				dataType: "string";
				columnType: "PgText";
				data: string;
				driverParam: string;
				notNull: true;
				hasDefault: false;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: [string, ...string[]];
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
		createdAt: import("drizzle-orm/pg-core").PgColumn<
			{
				name: "createdAt";
				tableName: "post_upvote";
				dataType: "date";
				columnType: "PgTimestamp";
				data: Date;
				driverParam: string;
				notNull: true;
				hasDefault: true;
				isPrimaryKey: false;
				isAutoincrement: false;
				hasRuntimeDefault: false;
				enumValues: undefined;
				baseColumn: never;
				identity: undefined;
				generated: undefined;
			},
			{},
			{}
		>;
	},
	undefined,
	undefined
>;
export declare const sortBySchema: z.ZodEnum<{
	points: "points";
	recent: "recent";
}>;
export declare const orderSchema: z.ZodEnum<{
	asc: "asc";
	desc: "desc";
}>;
export declare const paginationSchema: z.ZodObject<
	{
		limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
		page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
		sortBy: z.ZodDefault<
			z.ZodOptional<
				z.ZodEnum<{
					points: "points";
					recent: "recent";
				}>
			>
		>;
		order: z.ZodDefault<
			z.ZodOptional<
				z.ZodEnum<{
					asc: "asc";
					desc: "desc";
				}>
			>
		>;
		author: z.ZodOptional<z.ZodString>;
		site: z.ZodOptional<z.ZodString>;
	},
	z.core.$strip
>;
export declare const CreatePostOutput: z.ZodObject<
	{
		success: z.ZodBoolean;
		message: z.ZodString;
		data: z.ZodOptional<
			import("drizzle-zod").BuildSchema<
				"select",
				{
					id: import("drizzle-orm/pg-core").PgColumn<
						{
							name: "id";
							tableName: "post";
							dataType: "number";
							columnType: "PgSerial";
							data: number;
							driverParam: number;
							notNull: true;
							hasDefault: true;
							isPrimaryKey: true;
							isAutoincrement: false;
							hasRuntimeDefault: false;
							enumValues: undefined;
							baseColumn: never;
							identity: undefined;
							generated: undefined;
						},
						{},
						{}
					>;
					userId: import("drizzle-orm/pg-core").PgColumn<
						{
							name: "userId";
							tableName: "post";
							dataType: "string";
							columnType: "PgText";
							data: string;
							driverParam: string;
							notNull: true;
							hasDefault: false;
							isPrimaryKey: false;
							isAutoincrement: false;
							hasRuntimeDefault: false;
							enumValues: [string, ...string[]];
							baseColumn: never;
							identity: undefined;
							generated: undefined;
						},
						{},
						{}
					>;
					title: import("drizzle-orm/pg-core").PgColumn<
						{
							name: "title";
							tableName: "post";
							dataType: "string";
							columnType: "PgText";
							data: string;
							driverParam: string;
							notNull: true;
							hasDefault: false;
							isPrimaryKey: false;
							isAutoincrement: false;
							hasRuntimeDefault: false;
							enumValues: [string, ...string[]];
							baseColumn: never;
							identity: undefined;
							generated: undefined;
						},
						{},
						{}
					>;
					url: import("drizzle-orm/pg-core").PgColumn<
						{
							name: "url";
							tableName: "post";
							dataType: "string";
							columnType: "PgText";
							data: string;
							driverParam: string;
							notNull: false;
							hasDefault: false;
							isPrimaryKey: false;
							isAutoincrement: false;
							hasRuntimeDefault: false;
							enumValues: [string, ...string[]];
							baseColumn: never;
							identity: undefined;
							generated: undefined;
						},
						{},
						{}
					>;
					content: import("drizzle-orm/pg-core").PgColumn<
						{
							name: "content";
							tableName: "post";
							dataType: "string";
							columnType: "PgText";
							data: string;
							driverParam: string;
							notNull: false;
							hasDefault: false;
							isPrimaryKey: false;
							isAutoincrement: false;
							hasRuntimeDefault: false;
							enumValues: [string, ...string[]];
							baseColumn: never;
							identity: undefined;
							generated: undefined;
						},
						{},
						{}
					>;
					points: import("drizzle-orm/pg-core").PgColumn<
						{
							name: "points";
							tableName: "post";
							dataType: "number";
							columnType: "PgInteger";
							data: number;
							driverParam: string | number;
							notNull: true;
							hasDefault: true;
							isPrimaryKey: false;
							isAutoincrement: false;
							hasRuntimeDefault: false;
							enumValues: undefined;
							baseColumn: never;
							identity: undefined;
							generated: undefined;
						},
						{},
						{}
					>;
					commentCount: import("drizzle-orm/pg-core").PgColumn<
						{
							name: "commentCount";
							tableName: "post";
							dataType: "number";
							columnType: "PgInteger";
							data: number;
							driverParam: string | number;
							notNull: true;
							hasDefault: true;
							isPrimaryKey: false;
							isAutoincrement: false;
							hasRuntimeDefault: false;
							enumValues: undefined;
							baseColumn: never;
							identity: undefined;
							generated: undefined;
						},
						{},
						{}
					>;
					createdAt: import("drizzle-orm/pg-core").PgColumn<
						{
							name: "createdAt";
							tableName: "post";
							dataType: "date";
							columnType: "PgTimestamp";
							data: Date;
							driverParam: string;
							notNull: true;
							hasDefault: true;
							isPrimaryKey: false;
							isAutoincrement: false;
							hasRuntimeDefault: false;
							enumValues: undefined;
							baseColumn: never;
							identity: undefined;
							generated: undefined;
						},
						{},
						{}
					>;
				},
				undefined,
				undefined
			>
		>;
	},
	z.core.$strip
>;
export declare const UpvotePostInput: z.ZodObject<
	{
		postId: z.ZodNumber;
	},
	z.core.$strip
>;
export declare const UpvotePostOutput: z.ZodObject<
	{
		success: z.ZodBoolean;
		message: z.ZodString;
		data: z.ZodOptional<
			z.ZodObject<
				{
					points: z.ZodNumber;
					isUpvoted: z.ZodBoolean;
				},
				z.core.$strip
			>
		>;
	},
	z.core.$strip
>;
export declare const GetPostOutput: z.ZodObject<
	{
		status: z.ZodBoolean;
		message: z.ZodString;
		pagination: z.ZodObject<
			{
				page: z.ZodNumber;
				totalPages: z.ZodNumber;
			},
			z.core.$strip
		>;
		data: z.ZodOptional<
			z.ZodArray<
				import("drizzle-zod").BuildSchema<
					"select",
					{
						id: import("drizzle-orm/pg-core").PgColumn<
							{
								name: "id";
								tableName: "post";
								dataType: "number";
								columnType: "PgSerial";
								data: number;
								driverParam: number;
								notNull: true;
								hasDefault: true;
								isPrimaryKey: true;
								isAutoincrement: false;
								hasRuntimeDefault: false;
								enumValues: undefined;
								baseColumn: never;
								identity: undefined;
								generated: undefined;
							},
							{},
							{}
						>;
						userId: import("drizzle-orm/pg-core").PgColumn<
							{
								name: "userId";
								tableName: "post";
								dataType: "string";
								columnType: "PgText";
								data: string;
								driverParam: string;
								notNull: true;
								hasDefault: false;
								isPrimaryKey: false;
								isAutoincrement: false;
								hasRuntimeDefault: false;
								enumValues: [string, ...string[]];
								baseColumn: never;
								identity: undefined;
								generated: undefined;
							},
							{},
							{}
						>;
						title: import("drizzle-orm/pg-core").PgColumn<
							{
								name: "title";
								tableName: "post";
								dataType: "string";
								columnType: "PgText";
								data: string;
								driverParam: string;
								notNull: true;
								hasDefault: false;
								isPrimaryKey: false;
								isAutoincrement: false;
								hasRuntimeDefault: false;
								enumValues: [string, ...string[]];
								baseColumn: never;
								identity: undefined;
								generated: undefined;
							},
							{},
							{}
						>;
						url: import("drizzle-orm/pg-core").PgColumn<
							{
								name: "url";
								tableName: "post";
								dataType: "string";
								columnType: "PgText";
								data: string;
								driverParam: string;
								notNull: false;
								hasDefault: false;
								isPrimaryKey: false;
								isAutoincrement: false;
								hasRuntimeDefault: false;
								enumValues: [string, ...string[]];
								baseColumn: never;
								identity: undefined;
								generated: undefined;
							},
							{},
							{}
						>;
						content: import("drizzle-orm/pg-core").PgColumn<
							{
								name: "content";
								tableName: "post";
								dataType: "string";
								columnType: "PgText";
								data: string;
								driverParam: string;
								notNull: false;
								hasDefault: false;
								isPrimaryKey: false;
								isAutoincrement: false;
								hasRuntimeDefault: false;
								enumValues: [string, ...string[]];
								baseColumn: never;
								identity: undefined;
								generated: undefined;
							},
							{},
							{}
						>;
						points: import("drizzle-orm/pg-core").PgColumn<
							{
								name: "points";
								tableName: "post";
								dataType: "number";
								columnType: "PgInteger";
								data: number;
								driverParam: string | number;
								notNull: true;
								hasDefault: true;
								isPrimaryKey: false;
								isAutoincrement: false;
								hasRuntimeDefault: false;
								enumValues: undefined;
								baseColumn: never;
								identity: undefined;
								generated: undefined;
							},
							{},
							{}
						>;
						commentCount: import("drizzle-orm/pg-core").PgColumn<
							{
								name: "commentCount";
								tableName: "post";
								dataType: "number";
								columnType: "PgInteger";
								data: number;
								driverParam: string | number;
								notNull: true;
								hasDefault: true;
								isPrimaryKey: false;
								isAutoincrement: false;
								hasRuntimeDefault: false;
								enumValues: undefined;
								baseColumn: never;
								identity: undefined;
								generated: undefined;
							},
							{},
							{}
						>;
						createdAt: import("drizzle-orm/pg-core").PgColumn<
							{
								name: "createdAt";
								tableName: "post";
								dataType: "date";
								columnType: "PgTimestamp";
								data: Date;
								driverParam: string;
								notNull: true;
								hasDefault: true;
								isPrimaryKey: false;
								isAutoincrement: false;
								hasRuntimeDefault: false;
								enumValues: undefined;
								baseColumn: never;
								identity: undefined;
								generated: undefined;
							},
							{},
							{}
						>;
					},
					undefined,
					undefined
				>
			>
		>;
	},
	z.core.$strip
>;
export declare const CreateCommentInput: z.ZodObject<
	{
		content: z.ZodString;
		depth: z.ZodOptional<z.ZodInt>;
		commentCount: z.ZodOptional<z.ZodInt>;
		points: z.ZodOptional<z.ZodInt>;
		createdAt: z.ZodOptional<z.ZodDate>;
		userId: z.ZodString;
		postId: z.ZodString;
		id: z.ZodNumber;
		parentCommentId: z.ZodOptional<z.ZodNumber>;
	},
	{
		out: {};
		in: {};
	}
>;
export declare const CreateCommentOutput: z.ZodObject<
	{
		success: z.ZodBoolean;
		message: z.ZodString;
		data: z.ZodOptional<
			z.ZodObject<
				{
					id: z.ZodInt;
					content: z.ZodString;
					depth: z.ZodInt;
					commentCount: z.ZodInt;
					points: z.ZodInt;
					createdAt: z.ZodDate;
					userId: z.ZodString;
					postId: z.ZodString;
					parentCommentId: z.ZodNullable<z.ZodInt>;
					childComments: z.ZodOptional<
						z.ZodArray<
							import("drizzle-zod").BuildSchema<
								"select",
								{
									id: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "id";
											tableName: "comment";
											dataType: "number";
											columnType: "PgSerial";
											data: number;
											driverParam: number;
											notNull: true;
											hasDefault: true;
											isPrimaryKey: true;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: undefined;
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
									content: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "content";
											tableName: "comment";
											dataType: "string";
											columnType: "PgText";
											data: string;
											driverParam: string;
											notNull: true;
											hasDefault: false;
											isPrimaryKey: false;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: [string, ...string[]];
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
									depth: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "depth";
											tableName: "comment";
											dataType: "number";
											columnType: "PgInteger";
											data: number;
											driverParam: string | number;
											notNull: true;
											hasDefault: true;
											isPrimaryKey: false;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: undefined;
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
									commentCount: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "commentCount";
											tableName: "comment";
											dataType: "number";
											columnType: "PgInteger";
											data: number;
											driverParam: string | number;
											notNull: true;
											hasDefault: true;
											isPrimaryKey: false;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: undefined;
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
									points: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "points";
											tableName: "comment";
											dataType: "number";
											columnType: "PgInteger";
											data: number;
											driverParam: string | number;
											notNull: true;
											hasDefault: true;
											isPrimaryKey: false;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: undefined;
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
									createdAt: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "createdAt";
											tableName: "comment";
											dataType: "date";
											columnType: "PgTimestamp";
											data: Date;
											driverParam: string;
											notNull: true;
											hasDefault: true;
											isPrimaryKey: false;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: undefined;
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
									userId: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "userId";
											tableName: "comment";
											dataType: "string";
											columnType: "PgText";
											data: string;
											driverParam: string;
											notNull: true;
											hasDefault: false;
											isPrimaryKey: false;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: [string, ...string[]];
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
									postId: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "postId";
											tableName: "comment";
											dataType: "string";
											columnType: "PgText";
											data: string;
											driverParam: string;
											notNull: true;
											hasDefault: false;
											isPrimaryKey: false;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: [string, ...string[]];
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
									parentCommentId: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "parentCommentId";
											tableName: "comment";
											dataType: "number";
											columnType: "PgInteger";
											data: number;
											driverParam: string | number;
											notNull: false;
											hasDefault: false;
											isPrimaryKey: false;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: undefined;
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
								},
								undefined,
								undefined
							>
						>
					>;
					commentUpvotes: z.ZodOptional<
						z.ZodArray<
							import("drizzle-zod").BuildSchema<
								"select",
								{
									id: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "id";
											tableName: "comment_upvote";
											dataType: "number";
											columnType: "PgSerial";
											data: number;
											driverParam: number;
											notNull: true;
											hasDefault: true;
											isPrimaryKey: true;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: undefined;
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
									commentId: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "commentId";
											tableName: "comment_upvote";
											dataType: "number";
											columnType: "PgInteger";
											data: number;
											driverParam: string | number;
											notNull: true;
											hasDefault: false;
											isPrimaryKey: false;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: undefined;
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
									userId: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "userId";
											tableName: "comment_upvote";
											dataType: "string";
											columnType: "PgText";
											data: string;
											driverParam: string;
											notNull: true;
											hasDefault: false;
											isPrimaryKey: false;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: [string, ...string[]];
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
									createdAt: import("drizzle-orm/pg-core").PgColumn<
										{
											name: "createdAt";
											tableName: "comment_upvote";
											dataType: "date";
											columnType: "PgTimestamp";
											data: Date;
											driverParam: string;
											notNull: true;
											hasDefault: true;
											isPrimaryKey: false;
											isAutoincrement: false;
											hasRuntimeDefault: false;
											enumValues: undefined;
											baseColumn: never;
											identity: undefined;
											generated: undefined;
										},
										{},
										{}
									>;
								},
								undefined,
								undefined
							>
						>
					>;
					author: z.ZodObject<
						{
							name: z.ZodString;
							id: z.ZodString;
						},
						z.core.$strip
					>;
				},
				{
					out: {};
					in: {};
				}
			>
		>;
	},
	z.core.$strip
>;
export declare const UpvoteCommentInput: z.ZodObject<
	{
		commentId: z.ZodNumber;
	},
	z.core.$strip
>;
export declare const UpvoteCommentOutput: z.ZodObject<
	{
		success: z.ZodBoolean;
		message: z.ZodString;
		data: z.ZodOptional<
			z.ZodObject<
				{
					points: z.ZodNumber;
					commentUpvotes: z.ZodArray<
						z.ZodObject<
							{
								userId: z.ZodString;
							},
							z.core.$strip
						>
					>;
				},
				z.core.$strip
			>
		>;
	},
	z.core.$strip
>;
export declare const GetCommentsInput: z.ZodObject<
	{
		limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
		page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
		sortBy: z.ZodDefault<
			z.ZodOptional<
				z.ZodEnum<{
					points: "points";
					recent: "recent";
				}>
			>
		>;
		order: z.ZodDefault<
			z.ZodOptional<
				z.ZodEnum<{
					asc: "asc";
					desc: "desc";
				}>
			>
		>;
		author: z.ZodOptional<z.ZodString>;
		site: z.ZodOptional<z.ZodString>;
		id: z.ZodNumber;
	},
	z.core.$strip
>;
export declare const CommentResponseSchema: z.ZodObject<
	{
		id: z.ZodInt;
		content: z.ZodString;
		depth: z.ZodInt;
		commentCount: z.ZodInt;
		points: z.ZodInt;
		userId: z.ZodString;
		postId: z.ZodString;
		parentCommentId: z.ZodNullable<z.ZodInt>;
		commentUpvotes: z.ZodArray<
			z.ZodObject<
				{
					userId: z.ZodString;
				},
				z.core.$strip
			>
		>;
		author: z.ZodObject<
			{
				name: z.ZodString;
				id: z.ZodString;
			},
			z.core.$strip
		>;
		createdAt: z.ZodDate;
		readonly childComments: z.ZodOptional<
			z.ZodArray<
				z.ZodObject<
					/*elided*/ any,
					{
						out: {};
						in: {};
					}
				>
			>
		>;
	},
	{
		out: {};
		in: {};
	}
>;
export declare const GetCommentsOutput: z.ZodObject<
	{
		success: z.ZodBoolean;
		message: z.ZodString;
		data: z.ZodOptional<
			z.ZodArray<
				z.ZodObject<
					{
						id: z.ZodInt;
						content: z.ZodString;
						depth: z.ZodInt;
						commentCount: z.ZodInt;
						points: z.ZodInt;
						userId: z.ZodString;
						postId: z.ZodString;
						parentCommentId: z.ZodNullable<z.ZodInt>;
						commentUpvotes: z.ZodArray<
							z.ZodObject<
								{
									userId: z.ZodString;
								},
								z.core.$strip
							>
						>;
						author: z.ZodObject<
							{
								name: z.ZodString;
								id: z.ZodString;
							},
							z.core.$strip
						>;
						createdAt: z.ZodDate;
						readonly childComments: z.ZodOptional<
							z.ZodArray<
								z.ZodObject<
									/*elided*/ any,
									{
										out: {};
										in: {};
									}
								>
							>
						>;
					},
					{
						out: {};
						in: {};
					}
				>
			>
		>;
		pagination: z.ZodObject<
			{
				page: z.ZodNumber;
				totalPages: z.ZodNumber;
			},
			z.core.$strip
		>;
	},
	z.core.$strip
>;
