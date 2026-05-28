"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/components/ui";

type LookbookImage = {
  file: string;
  alt: string;
  name: string;
  price?: string;
  category: string;
};

function toPublicSrc(file: string) {
  return `/images/${encodeURIComponent(file)}`;
}

export function LookbookGallery({
  className,
  images
}: {
  className?: string;
  images: LookbookImage[];
}) {
  const items = useMemo(() => images.map((x) => ({ ...x, src: toPublicSrc(x.file) })), [images]);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, items.length]);

  return (
    <div className={cn(className)}>
      <div className="grid gap-4 md:gap-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="chip inline-flex">Galería</p>
            <h3
              className="mt-4"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 34,
                letterSpacing: "-0.02em",
                color: "var(--ink)"
              }}
            >
              Galería editorial
            </h3>
            <p className="mt-2 text-sm max-w-xl" style={{ color: "var(--ink-2)" }}>
              Selección de imágenes en grilla, con ampliación y navegación por teclado.
            </p>
          </div>
          <div className="hidden md:block text-xs" style={{ color: "var(--muted)" }}>
            {items.length} imágenes · click para ampliar · ESC para cerrar
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((x, i) => (
            <button
              key={x.file}
              type="button"
              className="card overflow-hidden text-left group"
              style={{
                background: "color-mix(in oklch, var(--paper) 92%, transparent)"
              }}
              onClick={() => setActive(i)}
              aria-label={`Abrir imagen ${i + 1}`}
            >
              <div className="relative aspect-4/5">
                <Image
                  src={x.src}
                  alt={x.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 33vw, 50vw"
                  style={{
                    objectFit: "cover",
                    transform: "scale(1.001)"
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0% 0 0 / 0) 0%, oklch(0% 0 0 / 0.10) 70%, oklch(0% 0 0 / 0.22) 100%)"
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="px-4 py-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm truncate" style={{ color: "var(--ink)" }}>
                    {x.name}
                  </p>
                  <p className="mt-0.5 text-xs truncate" style={{ color: "var(--muted)" }}>
                    {x.category}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  {x.price ? (
                    <p className="text-sm" style={{ color: "var(--ink)" }}>
                      {x.price}
                    </p>
                  ) : null}
                  <span className="text-xs" style={{ color: "var(--ink-2)" }}>
                    Ver
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-100 grid place-items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
          style={{
            background: "oklch(0% 0 0 / 0.55)",
            backdropFilter: "blur(10px)"
          }}
        >
          <div
            className="card overflow-hidden w-full"
            style={{
              maxWidth: 980,
              boxShadow: "0 40px 120px oklch(0% 0 0 / 0.45)",
              background: "color-mix(in oklch, var(--paper) 92%, transparent)"
            }}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3" style={{ borderBottom: "1px solid var(--line)" }}>
              <div className="min-w-0">
                <p className="text-xs tracking-wide uppercase" style={{ color: "var(--muted)" }}>
                  {items[active].category} · {String(active + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm truncate" style={{ color: "var(--ink)" }}>
                  {items[active].name}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {items[active].price ? (
                  <span className="hidden sm:inline text-sm mr-2" style={{ color: "var(--ink)" }}>
                    {items[active].price}
                  </span>
                ) : null}
                <button
                  type="button"
                  className="chip hover:opacity-80"
                  onClick={() => setActive((i) => (i === null ? 0 : (i - 1 + items.length) % items.length))}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="chip hover:opacity-80"
                  onClick={() => setActive((i) => (i === null ? 0 : (i + 1) % items.length))}
                >
                  →
                </button>
                <button type="button" className="chip hover:opacity-80" onClick={() => setActive(null)}>
                  Cerrar
                </button>
              </div>
            </div>

            <div className="relative w-full" style={{ aspectRatio: "4 / 5" }}>
              <Image
                src={items[active].src}
                alt={items[active].alt}
                fill
                sizes="980px"
                priority
                style={{ objectFit: "contain", background: "var(--paper)" }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

