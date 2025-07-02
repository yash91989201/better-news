import { publicProcedure } from "@/lib/orpc";
import { postRouter } from "./post";

export const appRouter = {
	post: postRouter,
	healthCheck: publicProcedure.handler(() => "OK"),
};

export type AppRouter = typeof appRouter;
