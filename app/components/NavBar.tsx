"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <div className="container flex justify-center">
        <div className="nav-pill">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "text-sm font-semibold tracking-wide",
                  active ? "text-[rgb(var(--accent))]" : "text-muted hover:text-[rgb(var(--ink))]"
                )}
              >
                {l.label.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
