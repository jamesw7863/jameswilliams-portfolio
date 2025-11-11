import "./globals.css";
import NavBar from "./components/NavBar";
import { Inter, DM_Serif_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dmserif" });

export const metadata = {
  title: "James Williams — Portfolio",
  description: "Software Engineer building clean, scalable solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable}`}>
        {/* centered pill nav */}
        <header className="fixed top-6 left-0 right-0 z-50">
          <NavBar />
        </header>

        {/* top offset for fixed nav */}
        <div className="pt-28">
          <main>{children}</main>
          <footer className="container py-10 text-xs text-muted">© {new Date().getFullYear()} James Williams.</footer>
        </div>
      </body>
    </html>
  );
}
