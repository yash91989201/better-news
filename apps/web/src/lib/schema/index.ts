import { insertPostSchema } from "@server/db/schema/post";
import { z } from "zod/v4";

export const createPostSchema = insertPostSchema
	.pick({
		title: true,
		url: true,
		content: true,
	})
	.refine((data) => data.url || data.content, {
		error: "Either url or content must be provided",
		path: ["url", "content"],
	});

export const SignupFormSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

export const SignupRouteSearchParams = z.object({
	redirectTo: z.string().default("/"),
});

export const LoginRouteSearchParams = z.object({
	redirectTo: z.string().default("/"),
});
