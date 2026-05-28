import { SectionShell } from "@/components/brand/section-shell";
import { Reveal } from "@/components/reveal";
import { copyTone } from "@/lib/brand-guidelines";

export function CopyToneSection() {
  const c = copyTone;

  return (
    <SectionShell
      id="copy"
      chip="Copy & tono"
      title="Cómo habla AYALMA"
      lead="Ejemplos reales por formato y lista de palabras clave vs. prohibidas."
    >
      <div className="grid gap-4">
        <Reveal>
          <article className="card p-6 md:p-7">
            <p className="type-caption">Principios</p>
            <ul className="mt-3 space-y-2">
              {c.principles.map((p) => (
                <li key={p} className="text-sm text-ink-muted">
                  {p}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {(
            [
              ["Titulares", c.examples.headlines, "type-h3"],
              ["Captions", c.examples.captions, "type-caption"],
              ["CTA", c.examples.cta, "type-cta"],
              ["Microcopy", c.examples.microcopy, "type-body-sm"]
            ] as const
          ).map(([label, items, cls], i) => (
            <Reveal key={label} delay={0.04 * i}>
              <article className="card p-6 md:p-7">
                <p className="type-caption">{label}</p>
                <ul className="mt-4 space-y-3">
                  {items.map((text) => (
                    <li key={text} className={cls}>
                      {text}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Reveal delay={0.1}>
            <article className="card p-6 md:p-7">
              <p className="type-caption text-accent">Palabras clave</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.keywords.map((w) => (
                  <span key={w} className="chip">
                    {w}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article className="card p-6 md:p-7 opacity-90">
              <p className="type-caption">Evitar (tono genérico)</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.forbidden.map((w) => (
                  <span
                    key={w}
                    className="chip line-through decoration-ink/40"
                    style={{ opacity: 0.75 }}
                  >
                    {w}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
