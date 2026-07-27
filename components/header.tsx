"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Header() {
  return (
    <header className="border-b border-border/70 py-6 sm:py-7">
      <nav
        aria-label="Primary navigation"
        className="flex items-center justify-between gap-5"
      >
        <Link
          href="/"
          className="group shrink-0 rounded-sm font-mono text-[13px] tracking-[-0.03em] text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          aria-label="Pranjal Butola, home"
        >
          <span aria-hidden="true" className="inline-flex items-center">
            <span className="mr-1 text-primary transition-transform duration-200 group-hover:-translate-x-0.5">
              ~/
            </span>
            <span>pranjal</span>
            <span className="text-muted-foreground transition-colors group-hover:text-primary">
              .fxd
            </span>
          </span>
        </Link>
        <ul className="flex items-center gap-4 sm:gap-6">
          <li>
            <NavLink href="/blog">Writing</NavLink>
          </li>
          <li>
            <NavLink href="/projects">Work</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
  className,
  ...props
}: {
  children: ReactNode;
  href: string;
} & ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isCurrent =
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={cn(
        "relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
        isCurrent &&
          "text-foreground after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-primary",
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
