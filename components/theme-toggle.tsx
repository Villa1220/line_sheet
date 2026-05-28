"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="chip inline-flex items-center gap-2 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? (isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro") : "Cambiar tema"}
      title={mounted ? (isDark ? "Tema oscuro" : "Tema claro") : "Cambiar tema"}
      style={{ color: "var(--ink)" }}
      disabled={!mounted}
    >
      {mounted ? (
        isDark ? (
          <>
            <Sun size={16} aria-hidden />
            <span className="hidden sm:inline">Claro</span>
          </>
        ) : (
          <>
            <Moon size={16} aria-hidden />
            <span className="hidden sm:inline">Oscuro</span>
          </>
        )
      ) : (
        <>
          <Moon size={16} aria-hidden />
          <span className="hidden sm:inline">Tema</span>
        </>
      )}
    </button>
  );
}

