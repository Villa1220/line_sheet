import { SectionShell } from "@/components/brand/section-shell";
import { Reveal } from "@/components/reveal";
import { brandCore } from "@/lib/brand-guidelines";

export function AudienceSection() {
  const brand = brandCore;

  return (
    <>
      <SectionShell
        id="publico"
        chip="Público objetivo"
        title={brand.audience.title}
        lead={brand.audience.desc}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {(
            [
              ["Buyer Persona · Femenino", brand.personas.femenino],
              ["Buyer Persona · Masculino", brand.personas.masculino]
            ] as const
          ).map(([label, p], i) => (
            <Reveal key={label} delay={0.04 * i}>
              <article className="card p-6 md:p-7">
                <p className="type-caption">{label}</p>
                <p className="mt-3 text-sm font-medium">
                  {p.name} · {p.age}
                </p>
                <p className="mt-1 text-xs text-muted">{p.profile}</p>
                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-ink-muted">
                  {p.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="ambitos"
        chip="Concepto"
        title="Los 9 ámbitos del diseño"
        lead="Marco para mantener coherencia entre símbolo, función y contexto."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {brand.designDomains.map((x, i) => (
            <Reveal key={x.k} delay={0.02 * (i % 6)}>
              <article className="card p-6 md:p-7">
                <p className="type-caption">{x.k}</p>
                <p className="mt-3 text-xs leading-relaxed text-ink-muted">{x.v}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
