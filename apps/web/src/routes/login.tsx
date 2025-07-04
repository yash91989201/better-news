import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form";
import { LoginRouteSearchParams } from "@/lib/schema";

export const Route = createFileRoute("/login")({
	validateSearch: LoginRouteSearchParams,
	beforeLoad: async ({ context: { authClient }, search }) => {
		const session = await authClient.getSession();
		if (session.data) {
			throw redirect({ to: search.redirectTo });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { redirectTo } = Route.useSearch();
	return <LoginForm redirectTo={redirectTo} />;
}
