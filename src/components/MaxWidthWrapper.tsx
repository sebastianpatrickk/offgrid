import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function MaxWidthWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "container flex max-w-4xl items-center gap-12 py-4 pb-10 md:py-8 md:pb-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
