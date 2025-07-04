import type { z } from "zod/v4";
import type { authClient } from "@/lib/auth";
import type { createPostSchema } from "@/lib/schema";

export type createPostType = z.infer<typeof createPostSchema>;
export type BetterAuthSession = typeof authClient.$Infer.Session;
