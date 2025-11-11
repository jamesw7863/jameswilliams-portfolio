import type { Metadata } from "next";
import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";

export const metadata: Metadata = {
  title: "James Williams — Portfolio",
  description: "Software engineering projects and experience.",
};

/* Load fonts and expose as CSS vars that globals.css reads */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  variable: "--font-cormorant",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-animate">
        <header className="sticky top-0 z-40 nav-band">
          <nav className="container flex items-center justify-center py-3">
            <ul className="flex items-center gap-8 text-sm font-medium text-[rgb(25,35,55)]/85">
              <li><a href="/" className="px-3 py-2 rounded-full hover:bg-black/5">HOME</a></li>
              <li><a href="/about" className="px-3 py-2 rounded-full hover:bg-black/5">ABOUT</a></li>
              <li><a href="/experience" className="px-3 py-2 rounded-full hover:bg-black/5">EXPERIENCE</a></li>
              <li><a href="/projects" className="px-3 py-2 rounded-full hover:bg-black/5">PROJECTS</a></li>
            </ul>
          </nav>
        </header>

        {children}

        <footer className="container py-8 text-xs text-muted">
          © {new Date().getFullYear()} James Williams.
        </footer>
      </body>
    </html>
  );
}
