import {
	Link,
	useNavigate,
	useRouteContext,
	useRouter,
} from "@tanstack/react-router";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth";
import { queryClient } from "@/utils/orpc";

export const UserMenu = () => {
	const router = useRouter();
	const navigate = useNavigate();
	const { session } = useRouteContext({ from: "__root__" });

	const onSignOutSuccess = () => {
		router.invalidate();
		queryClient.invalidateQueries();

		navigate({
			to: "/",
		});
	};

	if (!session) {
		return (
			<Link
				to="/login"
				className={buttonVariants({
					variant: "secondary",
				})}
			>
				LogIn
			</Link>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">{session.user.name}</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-card">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>{session.user.email}</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Button
						variant="destructive"
						className="w-full"
						onClick={() => {
							authClient.signOut({
								fetchOptions: {
									onSuccess: onSignOutSuccess,
								},
							});
						}}
					>
						Sign Out
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
