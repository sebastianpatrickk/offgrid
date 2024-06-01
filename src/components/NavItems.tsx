import Link from "next/link";
import { buttonVariants } from "./ui/button";
import UserNavAccount from "./UserNavAccount";

export default function Navigation({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <nav>
      <div className="flex items-center gap-4">
        <Link
          href="/cabins"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Cabins
        </Link>

        {isLoggedIn ? <UserNavAccount /> : null}
        {!isLoggedIn ? (
          <Link
            href="/"
            className={buttonVariants({ variant: "outline", rounded: "full" })}
          >
            Login
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
