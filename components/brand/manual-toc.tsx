"use client";

import { manualNav } from "@/lib/brand-guidelines";
import { Reveal } from "@/components/reveal";

export function ManualToc() {
  return (
    <section className="container-x pb-12 section-anchor" id="indice">
      <div className="hairline" />
      <Reveal>
        <div className="card p-8 md:p-10 my-10">
          <p className="type-caption">Manual de marca · AYALMA</p>
          <h2 className="type-h2 mt-3">Índice</h2>
          <p className="type-body-sm mt-3 max-w-lg text-ink-muted">
            Sistema aplicado: tipografía, color, patrones, fotografía, copy y aplicaciones con
            especificación lista para producción.
          </p>
          <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {manualNav.slice(1).map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-baseline gap-3 py-2 border-b border-line transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
                >
                  <span className="type-caption text-muted w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="type-body-sm group-hover:translate-x-0.5 transition-transform">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
