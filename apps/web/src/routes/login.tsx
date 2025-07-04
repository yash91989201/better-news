import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form";
import { LoginRouteSearchParams } from "@/lib/schema";

export const Route = createFileRoute("/login")({
	validateSearch: LoginRouteSearchParams,
	beforeLoad: async ({ context: { session } }) => {
		if (session) {
			throw redirect({ to: "/" });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { redirectTo } = Route.useSearch();
	return <LoginForm redirectTo={redirectTo} />;
}
