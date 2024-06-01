"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, CreditCard, LogOut, Settings, User2 } from "lucide-react";
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

export default function UserNavAccount({
  user,
}: {
  user: { name: string; email: string };
}) {
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
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="text-sm font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link className="cursor-pointer" href="/account">
            <User2 className="mr-2.5 size-4" /> Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link className="cursor-pointer" href="/account/billing">
            <CreditCard className="mr-2.5 size-4" /> Billing
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link className="cursor-pointer" href="/account/settings">
            <Settings className="mr-2.5 size-4" /> Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link className="cursor-pointer" href="/account/logout">
            <LogOut className="mr-2.5 size-4" /> Logout
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
