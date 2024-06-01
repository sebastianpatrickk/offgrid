"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function UserNavAccount() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu
      onOpenChange={(open) => {
        setIsOpen(open);
      }}
    >
      <DropdownMenuTrigger asChild>
        <p
          className={cn(
            "flex cursor-pointer items-center gap-1 text-sm text-muted-foreground transition-colors ease-in-out hover:text-foreground/80",
            { "text-foreground/80": isOpen },
          )}
        >
          Account
          <ChevronDown
            className={cn("h-4 w-4 text-muted-foreground transition-all", {
              "-rotate-180 text-foreground/80": isOpen,
            })}
          />
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/account">Account</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/account/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/account/reservations">Reservations</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
