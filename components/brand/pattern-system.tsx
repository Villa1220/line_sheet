import { SectionShell } from "@/components/brand/section-shell";
import { Reveal } from "@/components/reveal";
import { patternSystem } from "@/lib/brand-guidelines";
export function PatternSystemSection() {
  return (
    <SectionShell
      id="patrones"
      chip="Patrones gráficos"
      title="Variantes y densidad"
      lead="Escala, rotación y opacidad controladas para no saturar la composición."
    >
      <div className="grid gap-4">
        <div className="grid md:grid-cols-3 gap-4">
          {patternSystem.variants.map((v, i) => (
            <Reveal key={v.name} delay={0.04 * i}>
              <article className="card overflow-hidden">
                <div
                  className="h-36 pattern-tile bg-background"
                  style={{
                    opacity: Math.max(0.08, parseFloat(v.opacity) / 100 || 0.15),
                    backgroundSize: `${120 * parseFloat(v.scale || "1")}px`,
                    transform: `rotate(${v.rotation})`
                  }}
                  aria-hidden
                />
                <div className="p-5">
                  <p className="text-sm font-medium">{v.name}</p>
                  <p className="type-caption mt-1">
                    {v.scale} · {v.rotation} · {v.opacity}
                  </p>
                  <p className="mt-2 text-xs text-ink-muted">{v.use}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <article className="card p-6 md:p-7">
            <p className="type-caption">Dónde se usa</p>
            <div className="mt-4 grid md:grid-cols-2 gap-3">
              {patternSystem.placements.map((p) => (
                <div key={p.place} className="rounded-2xl p-4 border border-line">
                  <p className="text-sm font-medium">{p.place}</p>
                  <p className="mt-1 text-xs text-ink-muted">{p.rule}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.12}>
          <article className="card p-6 md:p-7 border-l-4 border-l-accent">
            <p className="type-caption">Reglas anti-ruido</p>
            <ul className="mt-3 space-y-2">
              {patternSystem.density.map((d) => (
                <li key={d} className="text-sm text-ink-muted flex gap-2">
                  <span className="text-accent">—</span>
                  {d}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </SectionShell>
  );
}
