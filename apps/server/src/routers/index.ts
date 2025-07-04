import { publicProcedure } from "@/lib/orpc";
import { postRouter } from "./post";
import { sessionRouter } from "./session";

export const appRouter = {
	post: postRouter,
	session: sessionRouter,
	healthCheck: publicProcedure.handler(() => "OK"),
};

export type AppRouter = typeof appRouter;
