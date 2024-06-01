import Link from "next/link";
import UserNavAccount from "./UserNavAccount";
import { buttonVariants } from "./ui/button";

import Image from "next/image";

export default function Header() {
  const user = {
    name: "John Doe",
    email: "johndoe@gmail.com",
  };

  return (
    <header className="mt-4 w-full bg-background">
      <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between">
        <Link href="/">
          <Image
            className="rounded-md"
            src="/logo.png"
            width={36}
            height={36}
            quality={100}
            alt="Off Grid logo"
          />
        </Link>

        <nav>
          <div className="flex items-center gap-4">
            <Link
              href="/cabins"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Cabins
            </Link>

            {user ? (
              <Link
                href="/account/reservations"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Reservations
              </Link>
            ) : null}

            {!user ? (
              <Link
                href="/"
                className={buttonVariants({
                  variant: "outline",
                  rounded: "full",
                  size: "smResponsive",
                })}
              >
                Login
              </Link>
            ) : null}
            {user ? <UserNavAccount user={user} /> : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
