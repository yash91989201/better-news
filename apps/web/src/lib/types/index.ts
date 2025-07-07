import type { authClient } from "@/lib/auth";

export type BetterAuthSession = typeof authClient.$Infer.Session;
