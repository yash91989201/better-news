import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/submit")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_auth/submit"!</div>;
}
