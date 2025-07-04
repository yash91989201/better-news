import { Link } from "@tanstack/react-router";
import { MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { UserMenu } from "./user-menu";

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full bg-primary">
			<div className="container mx-auto flex items-center justify-between p-3">
				<div className="flex flex-1 items-center space-x-3">
					<Link to="/" className="font-bold text-2xl">
						Better News
					</Link>

					<nav className="hidden w-full flex-1 items-center md:flex">
						<Link
							className={buttonVariants({
								variant: "link",
								className: "text-white",
							})}
							to="/new"
						>
							new
						</Link>
						<Link
							className={buttonVariants({
								variant: "link",
								className: "text-white",
							})}
							to="/top"
						>
							top
						</Link>
						<Link
							className={buttonVariants({
								variant: "link",
								className: "text-white",
							})}
							to="/submit"
						>
							submit
						</Link>
					</nav>
					<UserMenu />
				</div>
				<Sheet>
					<SheetTrigger>
						<Button
							variant="secondary"
							size="icon"
							className="md:hidden"
							asChild
						>
							<MenuIcon className="size-4" />
						</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetTitle>Better News</SheetTitle>
						<SheetDescription className="sr-only hidden">
							Navigation
						</SheetDescription>
						<nav className="flex flex-col items-start space-y-2">
							<Link
								className={buttonVariants({
									variant: "link",
								})}
								to="/new"
							>
								new
							</Link>
							<Link
								className={buttonVariants({
									variant: "link",
								})}
								to="/top"
							>
								top
							</Link>
							<Link
								className={buttonVariants({
									variant: "link",
								})}
								to="/submit"
							>
								submit
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
};
