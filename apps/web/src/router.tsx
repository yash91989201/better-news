import "@/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
// CUSTOM COMPONENTS
import Loader from "@/components/loader";
import { authClient } from "@/lib/auth-client";
// UTILS
import { routeTree } from "@/routeTree.gen";
import { orpc, queryClient } from "@/utils/orpc";

export const createRouter = () => {
	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		context: { api: orpc, queryClient, authClient },
		defaultPendingComponent: () => <Loader />,
		defaultNotFoundComponent: () => <div>Not Found</div>,
		Wrap: ({ children }) => (
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		),
	});
	return router;
};

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
