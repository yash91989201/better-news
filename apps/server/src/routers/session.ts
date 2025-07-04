import { publicProcedure } from "@/lib/orpc";

export const sessionRouter = {
	get: publicProcedure.handler(async ({ context }) => {
		return context.session;
	}),
};
