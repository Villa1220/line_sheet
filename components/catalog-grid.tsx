"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { cn } from "@/components/ui";

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
            <div className="relative aspect-4/5">
              <Image
                src={toPublicSrc(p.file)}
                alt={p.name}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
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
                  Stock limitado
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

