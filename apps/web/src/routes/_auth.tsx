import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
	beforeLoad: ({ context: { session }, location }) => {
		if (!session.data) {
			throw redirect({
				to: "/login",
				search: {
					redirectTo: location.href,
				},
			});
		}
	},
});
