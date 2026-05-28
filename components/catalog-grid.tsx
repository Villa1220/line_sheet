"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/components/ui";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

export type CatalogItem = {
  file: string;
  name: string;
  category: "Outerwear" | "Tops" | "Bottoms" | "Dresses";
  price: string;
  details: string;
};

function toPublicSrc(file: string) {
  return `/images/${encodeURIComponent(file)}`;
}

const filters: Array<{ id: "All" | CatalogItem["category"]; label: string }> = [
  { id: "All", label: "Todo" },
  { id: "Outerwear", label: "Outerwear" },
  { id: "Tops", label: "Tops" },
  { id: "Bottoms", label: "Bottoms" },
  { id: "Dresses", label: "Dresses" }
];

export function CatalogGrid({
  className,
  items
}: {
  className?: string;
  items: CatalogItem[];
}) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("All");
  const [active, setActive] = useState<CatalogItem | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((x) => x.category === filter);
  }, [filter, items]);

  const counts = useMemo(() => {
    const base = {
      All: items.length,
      Outerwear: 0,
      Tops: 0,
      Bottoms: 0,
      Dresses: 0
    } as const;
    const c = { ...base };
    for (const x of items) c[x.category] += 1;
    return c;
  }, [items]);

  useEffect(() => {
    if (!active) return;

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);

    // Enfocar el botón de cerrar para accesibilidad.
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(t);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [active]);

  return (
    <div className={cn(className)}>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => {
          const selected = filter === f.id;
          const count = counts[f.id as keyof typeof counts] ?? 0;
          return (
            <button
              key={f.id}
              type="button"
              className={cn("chip inline-flex items-center gap-2 hover:opacity-80", selected && "opacity-100")}
              onClick={() => setFilter(f.id)}
              aria-pressed={selected}
              style={{
                borderColor: selected ? "color-mix(in oklch, var(--accent) 45%, var(--line))" : undefined,
                color: selected ? "var(--ink)" : undefined
              }}
            >
              <span>{f.label}</span>
              <span className="kbd" aria-label={`Cantidad ${count}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <article key={p.file} className="card overflow-hidden">
            <button
              type="button"
              className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              onClick={() => setActive(p)}
              aria-label={`Ampliar ${p.name}`}
            >
              <div className="relative aspect-4/5">
                <Image
                  src={toPublicSrc(p.file)}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, color-mix(in oklch, var(--brand-cacao) 55%, transparent))"
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs tracking-wide uppercase" style={{ color: "var(--muted)" }}>
                      {p.category}
                    </p>
                    <h3 className="mt-2 text-lg leading-tight" style={{ color: "var(--ink)" }}>
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm" style={{ color: "var(--ink-2)" }}>
                      {p.details}
                    </p>
                  </div>
                  <div className="shrink-0 text-sm" style={{ color: "var(--ink)" }}>
                    {p.price}
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    Drop 01 · 2026
                  </span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>
                    Ver detalle
                  </span>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden={false}
          >
            <div
              className="absolute inset-0"
              onClick={() => setActive(null)}
              style={{
                background: "color-mix(in oklch, var(--brand-cacao) 55%, transparent)",
                backdropFilter: "blur(10px)"
              }}
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Detalle de ${active.name}`}
              className="relative w-full max-w-5xl overflow-hidden rounded-[22px] border border-line shadow-soft"
              initial={{ y: 18, opacity: 0, scale: 0.985 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 12, opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.28, ease: [0.21, 0.61, 0.35, 1] }}
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklch, var(--paper) 92%, transparent), color-mix(in oklch, var(--surface-elevated) 92%, transparent))"
              }}
            >
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-7 relative min-h-[320px]">
                  <div className="absolute inset-0 pattern-tile opacity-[0.06]" aria-hidden="true" />
                  <Image
                    src={toPublicSrc(active.file)}
                    alt={active.name}
                    fill
                    priority
                    sizes="(min-width: 768px) 60vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, color-mix(in oklch, var(--brand-cacao) 25%, transparent), transparent 55%)"
                    }}
                    aria-hidden="true"
                  />
                </div>

                <div className="md:col-span-5 p-6 sm:p-7 md:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="type-caption">{active.category}</p>
                      <h3 className="type-h3 mt-3">{active.name}</h3>
                    </div>
                    <button
                      ref={closeBtnRef}
                      type="button"
                      className="inline-flex items-center justify-center rounded-full border border-line w-10 h-10 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      onClick={() => setActive(null)}
                      aria-label="Cerrar"
                      style={{
                        background: "color-mix(in oklch, var(--paper) 70%, transparent)"
                      }}
                    >
                      <X size={18} aria-hidden />
                    </button>
                  </div>

                  <p className="type-body mt-5">{active.details}</p>

                  <div
                    className="mt-6 rounded-2xl p-4 border border-line"
                    style={{ background: "color-mix(in oklch, var(--surface-elevated) 92%, transparent)" }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="type-caption">Precio</span>
                      <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                        {active.price}
                      </span>
                    </div>
                    <div className="mt-3 hairline" />
                    <div className="mt-3 flex items-center justify-between text-xs" style={{ color: "var(--muted)" }}>
                      <span>Drop 01 · 2026</span>
                      <span>Stock limitado</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button type="button" className="btn-primary" onClick={() => setActive(null)}>
                      Cerrar
                    </button>
                    <a href="#galeria" className="btn-secondary" onClick={() => setActive(null)}>
                      Ver campaña
                    </a>
                  </div>

                  <p className="mt-6 text-[11px] leading-relaxed text-muted">
                    Piezas con intención: proporción limpia, textura visible y símbolo leído de cerca.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

