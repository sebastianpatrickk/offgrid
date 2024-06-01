import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <header className="mt-4 w-full bg-background">
      <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between">
        <div className="flex gap-1">
          <Link href="/">offgrid.com</Link>
          <span>/</span>
          <span>home</span>
        </div>

        <nav className="flex items-center space-x-1">
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
