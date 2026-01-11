"use client";

import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="py-8 border-b border-border">
      <nav className="flex items-center justify-between">
        <NavLink href="/" className="font-mono tracking-tight">
          alex.chen
        </NavLink>
        <div className="flex items-center gap-6">
          <NavLink href="/work" className="font-mono text-muted-foreground">
            Work
          </NavLink>
          <NavLink href="/blog" className="font-mono text-muted-foreground">
            Blog
          </NavLink>
          <NavLink href="/about" className="font-mono text-muted-foreground">
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

type X = React.AnchorHTMLAttributes<HTMLAnchorElement>;

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
  return (
    <Link
      href={href}
      className={cn(
        "text-sm hover:text-primary transition-colors",
        className,
        pathname.startsWith(href) && "text-primary"
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
