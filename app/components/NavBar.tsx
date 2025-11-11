"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 nav-band">
      <nav className="container flex items-center justify-center py-3">
        <ul className="flex items-center gap-8 text-sm font-medium text-[rgb(25,35,55)]/85">
          <li><Link href="/" className="px-3 py-2 rounded-full hover:bg-white/40">HOME</Link></li>
          <li><Link href="/about" className="px-3 py-2 rounded-full hover:bg-white/40">ABOUT</Link></li>
          <li><Link href="/experience" className="px-3 py-2 rounded-full hover:bg-white/40">EXPERIENCE</Link></li>
          <li><Link href="/projects" className="px-3 py-2 rounded-full hover:bg-white/40">PROJECTS</Link></li>
        </ul>
      </nav>
    </header>
  );
}
