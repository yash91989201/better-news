import type { z } from "zod/v4";
import type { createPostSchema } from "@/lib/schema";

export type createPostType = z.infer<typeof createPostSchema>;
