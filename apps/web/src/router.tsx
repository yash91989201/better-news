import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { ErrorComponent } from "@/components/error-component";
// CUSTOM COMPONENTS
import Loader from "@/components/loader";
import { NotFound } from "@/components/not-found";
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
		defaultNotFoundComponent: () => <NotFound />,
		defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
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
