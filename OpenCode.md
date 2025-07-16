# OpenCode.md

## Build/Test/Lint Commands
- Install: `bun install`
- Build: `bun build` (all) / `bun build:web` / `bun build:server`
- Dev: `bun dev` (all) / `bun dev:web` / `bun dev:server`
- Typecheck: `bun check-types`
- Lint/Format: `bun check` (Biome)
- DB: `bun db:push` / `bun db:studio`

## Test
- No test scripts found. Recommend @testing-library for web; add if missing.

## Code Style Guidelines
- Formatting: Biome enforced; tabs, double quotes.
- Imports: Sorted/organized automatically.
- Types: Use TypeScript, prefer `zod` for validation.
- Naming: camelCase for variables/functions, PascalCase for types/components.
- Error Handling: Use try/catch, Hono for API errors.
- UI: TanStack, shadcn/ui; Tailwind for styles.
- One var declaration per line; prefer self-closing JSX tags.
- No parameter reassignments.

## If adding tests: place in `__tests__` or `*.test.ts(x)` files near code.
