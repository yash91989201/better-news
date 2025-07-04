import { createFileRoute, redirect } from "@tanstack/react-router";
import { SignupForm } from "@/components/signup-form";
import { SignupRouteSearchParams } from "@/lib/schema";

export const Route = createFileRoute("/signup")({
	validateSearch: SignupRouteSearchParams,
	beforeLoad: async ({ context: { session } }) => {
		if (session) {
			throw redirect({ to: "/" });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { redirectTo } = Route.useSearch();
	return <SignupForm redirectTo={redirectTo} />;
}
