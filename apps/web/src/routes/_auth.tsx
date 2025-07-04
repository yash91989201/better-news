import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
	beforeLoad: async ({ context: { session }, location }) => {
		if (!session) {
			throw redirect({
				to: "/login",
				search: {
					redirectTo: location.pathname,
				},
			});
		}

		return {
			session,
		};
	},
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
