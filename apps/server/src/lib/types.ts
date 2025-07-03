import type { z } from "zod/v4";
import type {
	CreateCommentOutput,
	GetCommentsOutput,
	GetPostOutput,
} from "@/lib/schema";

export type GetPostOutputType = z.infer<typeof GetPostOutput>;
export type CreateCommentOutputType = z.infer<typeof CreateCommentOutput>;
export type GetCommentsOutputType = z.infer<typeof GetCommentsOutput>;
