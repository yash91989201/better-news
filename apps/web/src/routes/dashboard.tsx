import { useQuery } from "@tanstack/react-query";
import {
	createFileRoute,
	redirect,
	useRouteContext,
} from "@tanstack/react-router";
import { orpc } from "@/utils/orpc";

export const Route = createFileRoute("/dashboard")({
	beforeLoad: async ({ context }) => {
		const session = context.session.data;
		if (!session) {
			throw redirect({
				to: "/login",
				search: {
					redirect: "/dashboard",
				},
			});
		}

		return { session };
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { session } = useRouteContext({ from: Route.id });
	const privateData = useQuery(orpc.privateData.queryOptions());

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Welcome {session.user.name}</p>
			<p>privateData: {privateData.data?.message}</p>
		</div>
	);
}
