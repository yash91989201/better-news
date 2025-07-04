import { createFileRoute, redirect } from "@tanstack/react-router";
import { SignupForm } from "@/components/signup-form";
import { SignupRouteSearchParams } from "@/lib/schema";

export const Route = createFileRoute("/signup")({
	validateSearch: SignupRouteSearchParams,
	beforeLoad: async ({ context: { authClient } }) => {
		const session = await authClient.getSession();
		if (session?.data?.user) {
			return redirect({
				to: "/",
			});
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const { redirectTo } = Route.useSearch();
	return <SignupForm redirectTo={redirectTo} />;
}
