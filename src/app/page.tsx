import { buttonVariants } from "@/components/ui/button";
import { SourceMap } from "module";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container flex flex-col gap-6 px-4 sm:px-8">
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-2 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <h1 className="animate-fade-up text-center text-3xl font-bold tracking-tighter md:text-5xl lg:leading-[1.1]">
          Take your mind and body off the grid
        </h1>
        <p className="text-balance text-center text-base text-muted-foreground sm:text-lg">
          Relax your body and mind in remote locations with off grid. Rent a
          luxury cabins in the most remote locations, and enjoy undisturbed
          luxury.
        </p>
        <div className="flex gap-4">
          <Link href="/villas" className={buttonVariants({ size: "lg" })}>
            Explore luxury cabins
          </Link>
        </div>
      </section>
    </div>
  );
}
