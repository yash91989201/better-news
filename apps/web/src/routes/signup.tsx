import { createFileRoute, redirect } from "@tanstack/react-router";
import { SignupForm } from "@/components/signup-form";
import { SignupRouteSearchParams } from "@/lib/schema";

export const Route = createFileRoute("/signup")({
	validateSearch: SignupRouteSearchParams,
	beforeLoad: async ({ context: { session }, search }) => {
		if (session.data) {
			throw redirect({ to: search.redirectTo });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { redirectTo } = Route.useSearch();
	return <SignupForm redirectTo={redirectTo} />;
}
