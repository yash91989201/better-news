import * as schema from "@shared/db/schema";
import { drizzle } from "drizzle-orm/bun-sql";
import { env } from "@/env";

export const db = drizzle(env.DATABASE_URL, {
	casing: "snake_case",
	schema,
});
