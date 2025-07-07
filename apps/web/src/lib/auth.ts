import { createServerFn } from "@tanstack/react-start";
import { createAuthClient } from "better-auth/react";
import { authMiddleware } from "./middleware/auth";

export const authClient = createAuthClient({
	baseURL: import.meta.env.VITE_SERVER_URL,
});

export const getServerSession = createServerFn({ method: "GET" })
	.middleware([authMiddleware])
	.handler(({ context }) => {
		return context.session;
	});
