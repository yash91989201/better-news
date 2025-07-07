import { z } from "zod/v4";

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
