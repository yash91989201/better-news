import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import appCss from "@/index.css?url";
import type { authClient } from "@/lib/auth";
import type { orpcClient, orpcQueryUtils } from "@/utils/orpc";

export interface RouterAppContext {
	api: typeof orpcQueryUtils;
	orpcClient: typeof orpcClient;
	queryClient: QueryClient;
	authClient: typeof authClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Better News",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	beforeLoad: async ({ context: { orpcClient, authClient } }) => {
		const serverSession = orpcClient.session.get();
		const { data: clientSession } = await authClient.getSession();

		return {
			session: serverSession ?? clientSession,
		};
	},
	component: RootDocument,
});

function RootDocument() {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				<div className="flex min-h-screen flex-col text-foreground">
					<Header />
					<main className="container mx-auto grow gap-3">
						<Outlet />
					</main>
					<footer className="p-4 text-center">
						<p className="text-muted-foreground text-sm">Better News &copy;</p>
					</footer>
				</div>
				<Toaster richColors />
				<TanStackRouterDevtools position="bottom-left" />
				<ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
				<Scripts />
			</body>
		</html>
	);
}
