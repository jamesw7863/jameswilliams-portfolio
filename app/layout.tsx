import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "James Williams — Portfolio",
  description: "Software engineering projects and experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-neutral-950 text-neutral-100">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight">James Williams</Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/about">About</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/projects">Projects</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mx-auto max-w-6xl px-4 py-10 text-xs opacity-60">
          © {new Date().getFullYear()} James Williams. Built with Next.js.
        </footer>
      </body>
    </html>
  );
}
