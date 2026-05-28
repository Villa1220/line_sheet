"use client";

import { SectionShell } from "@/components/brand/section-shell";
import { Reveal } from "@/components/reveal";
import { colorSystem } from "@/lib/brand-guidelines";

function ProportionBar() {
  const { dominant, secondary, accent } = colorSystem.proportion;
  return (
    <div className="mt-4 flex h-3 rounded-full overflow-hidden border border-line">
      <div
        className="h-full"
        style={{ width: `${dominant}%`, background: "var(--brand-arena)" }}
        title={`${dominant}% fondo`}
      />
      <div
        className="h-full"
        style={{ width: `${secondary}%`, background: "var(--brand-tierra)" }}
        title={`${secondary}% superficie`}
      />
      <div
        className="h-full"
        style={{ width: `${accent}%`, background: "var(--brand-arcilla)" }}
        title={`${accent}% acento`}
      />
    </div>
  );
}

export function ColorSystemSection() {
  return (
    <SectionShell
      id="color"
      chip="Sistema de color"
      title="Tokens y proporción 70/20/10"
      lead="Colores semánticos, estados UI y contraste documentado — más allá de la lista HEX."
    >
      <div className="grid gap-4">
        <Reveal>
          <article className="card p-6 md:p-7">
            <p className="type-caption">Proporción de uso</p>
            <p className="type-body-sm mt-3 text-ink-muted">{colorSystem.proportionDesc}</p>
            <ProportionBar />
            <div className="mt-3 flex gap-4 text-[11px] text-muted">
              <span>70% background</span>
              <span>20% surface</span>
              <span>10% accent</span>
            </div>
          </article>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorSystem.swatches.map((s, i) => (
            <Reveal key={s.hex} delay={0.03 * i}>
              <article className="card overflow-hidden">
                <div className="h-24" style={{ background: s.hex }} />
                <div className="p-5">
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="type-caption mt-1">{s.hex}</p>
                  <p className="mt-2 text-xs text-ink-muted">
                    <span className="font-medium text-ink">{s.role}</span> — {s.usage}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <article className="card p-6 md:p-7">
            <p className="type-caption">Tokens semánticos</p>
            <div className="mt-4 grid md:grid-cols-2 gap-3">
              {colorSystem.semantic.map((t) => (
                <div
                  key={t.token}
                  className="flex items-center gap-4 rounded-2xl p-4 border border-line"
                  style={{ background: "var(--surface-elevated)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl border border-line shrink-0"
                    style={{
                      background:
                        t.token === "background"
                          ? "var(--brand-arena)"
                          : t.token === "surface"
                            ? "var(--brand-tierra)"
                            : t.token === "ink"
                              ? "var(--brand-cacao)"
                              : t.token === "ink-muted"
                                ? "var(--brand-grafito)"
                                : "var(--brand-arcilla)"
                    }}
                  />
                  <div>
                    <code className="text-xs font-medium">--{t.token}</code>
                    <p className="text-[11px] text-muted mt-0.5">{t.maps}</p>
                    <p className="text-xs text-ink-muted mt-1">{t.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          <Reveal delay={0.1}>
            <article className="card p-6 md:p-7">
              <p className="type-caption">Estados UI</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button type="button" className="btn-primary">
                  Primario
                </button>
                <button type="button" className="btn-secondary">
                  Secundario
                </button>
                <button type="button" className="btn-primary" disabled>
                  Disabled
                </button>
              </div>
              <ul className="mt-5 space-y-2">
                {colorSystem.uiStates.map((u) => (
                  <li key={u.state} className="text-xs text-ink-muted">
                    <span className="font-medium text-ink capitalize">{u.state}</span> — {u.desc}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="card p-6 md:p-7">
              <p className="type-caption">Contraste (WCAG)</p>
              <ul className="mt-4 space-y-3">
                {colorSystem.contrast.map((c) => (
                  <li
                    key={c.pair}
                    className="flex justify-between items-center text-xs border-b border-line pb-2"
                  >
                    <span className="text-ink-muted">{c.pair}</span>
                    <span className="font-medium text-ink">
                      {c.ratio} {c.pass ? "✓" : "—"}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
