import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
	beforeLoad: async ({ context: { session }, location }) => {
		const currentUser = session?.data?.user;
		const currentSession = session?.data?.session;

		if (!currentSession || !currentSession) {
			throw redirect({
				to: "/login",
				search: {
					redirectTo: location.pathname,
				},
			});
		}

		return {
			user: currentUser,
			session: currentSession,
		};
	},
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
