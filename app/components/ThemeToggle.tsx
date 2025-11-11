"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const active = mounted ? resolvedTheme : theme;

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(active === "dark" ? "light" : "dark")}
      className="rounded-xl border border-border px-3 py-1 text-xs opacity-90 hover:opacity-100"
    >
      {active === "dark" ? "Light" : "Dark"}
    </button>
  );
}
