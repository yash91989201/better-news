import type { z } from "zod/v4";
import type { GetPostOutput } from "@/lib/schema";

export type GetPostOutputType = z.infer<typeof GetPostOutput>;
