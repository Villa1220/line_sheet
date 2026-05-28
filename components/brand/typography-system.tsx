import { SectionShell } from "@/components/brand/section-shell";
import { Reveal } from "@/components/reveal";
import { typographySystem } from "@/lib/brand-guidelines";

export function TypographySystemSection() {
  const { families, scale, pairing } = typographySystem;

  return (
    <SectionShell
      id="tipografia"
      chip="Sistema tipográfico"
      title="Jerarquía aplicada"
      lead="Cinzel y Montserrat con tracking, leading y pesos definidos — no solo nombres de fuente."
    >
      <div className="grid gap-4">
        <Reveal>
          <article className="card p-6 md:p-7">
            <p className="type-caption">Familias y sustitutos web</p>
            <div className="mt-5 grid md:grid-cols-3 gap-4">
              {Object.entries(families).map(([key, f]) => (
                <div key={key} className="rounded-2xl p-4 border border-line bg-surface/40">
                  <p
                    className={
                      key === "display"
                        ? "font-display text-xl"
                        : key === "accent"
                          ? "font-display text-lg"
                          : "font-sans text-sm font-medium"
                    }
                  >
                    {f.name}
                  </p>
                  <p className="type-caption mt-2">{f.role}</p>
                  <p className="mt-2 text-xs text-ink-muted">{f.weights.join(" · ")}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    <span className="text-ink">Fallback:</span> {f.fallback}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{f.why}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <div className="grid gap-3">
          {scale.map((row, i) => (
            <Reveal key={row.token} delay={0.03 * i}>
              <article className="card p-6 md:p-7 grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-2">
                  <span className="type-caption">{row.token}</span>
                  <p className="mt-2 text-[11px] leading-snug text-muted">{row.specs}</p>
                </div>
                <div className="md:col-span-6">
                  <p
                    className={
                      row.token === "H1"
                        ? "type-h1"
                        : row.token === "H2"
                          ? "type-h2"
                          : row.token === "H3"
                            ? "type-h3"
                            : row.token === "Caption"
                              ? "type-caption"
                              : row.token === "CTA"
                                ? "type-cta"
                                : "type-body"
                    }
                  >
                    {row.sample}
                  </p>
                </div>
                <p className="md:col-span-4 text-xs text-ink-muted leading-relaxed">{row.usage}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <p className="text-xs text-muted border-l-2 border-accent pl-4">{pairing}</p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
