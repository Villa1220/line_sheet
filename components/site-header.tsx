"use client";

import { BrandLogo } from "@/components/brand-logo";
import { manualNav } from "@/lib/brand-guidelines";
import { Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md transition-shadow duration-300"
      style={{
        background: scrolled
          ? "color-mix(in oklch, var(--bg) 94%, transparent)"
          : "color-mix(in oklch, var(--bg) 82%, transparent)",
        borderBottom: "1px solid var(--line)",
        boxShadow: scrolled ? "var(--shadow-soft)" : "none"
      }}
    >
      <div className="container-x py-3 md:py-4">
        <div className="grid-12 items-center">
          <div className="col-span-6 md:col-span-3">
            <a href="#" className="inline-flex items-center" aria-label="AYALMA — Inicio">
              <BrandLogo variant="wordmark" priority />
            </a>
          </div>

          <nav className="col-span-6 hidden lg:block lg:col-span-6" aria-label="Manual de marca">
            <ul className="flex items-center justify-center gap-4 xl:gap-5">
              {manualNav.slice(0, 8).map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="type-caption !text-[10px] hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 lg:col-span-3 flex justify-end gap-2">
            <a href="#coleccion" className="chip hidden sm:inline-flex items-center gap-2 hover:opacity-80">
              <Search size={16} aria-hidden />
              <span>Buscar</span>
            </a>
            <a
              href="#coleccion"
              className="chip inline-flex items-center gap-2 hover:opacity-80"
              aria-label="Colección"
            >
              <ShoppingBag size={16} aria-hidden />
              <span className="hidden sm:inline">Colección</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
