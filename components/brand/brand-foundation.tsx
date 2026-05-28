import { SectionShell } from "@/components/brand/section-shell";
import { Reveal } from "@/components/reveal";
import { brandCore } from "@/lib/brand-guidelines";

export function BrandFoundationSection() {
  const brand = brandCore;

  return (
    <SectionShell
      id="manual"
      chip="Manual de marca"
      title="Propósito, misión y visión"
      lead="Base editorial para comunicar identidad con claridad y consistencia."
    >
      <div className="grid gap-4">
        <Reveal delay={0.04}>
          <article className="card p-6 md:p-7">
            <p className="type-caption">Propósito</p>
            <h3 className="type-h3 mt-3">{brand.name}</h3>
            <p className="type-body-sm mt-3 leading-relaxed">{brand.purpose}</p>
          </article>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          <Reveal delay={0.06}>
            <article className="card p-6 md:p-7">
              <p className="type-caption">Misión</p>
              <p className="type-body-sm mt-3 leading-relaxed">{brand.mission}</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="card p-6 md:p-7">
              <p className="type-caption">Visión</p>
              <p className="type-body-sm mt-3 leading-relaxed">{brand.vision}</p>
            </article>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {brand.values.map((x, i) => (
            <Reveal key={x.title} delay={0.06 + i * 0.02}>
              <article className="card p-6 md:p-7">
                <p className="type-caption">Valores</p>
                <p className="mt-3 text-sm font-medium text-ink">{x.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{x.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <article className="card p-6 md:p-7">
            <p className="type-caption">Personalidad de marca</p>
            <p className="mt-3 text-sm font-medium text-ink">{brand.personality.headline}</p>
            <div className="mt-4 grid md:grid-cols-3 gap-3">
              {[
                ["Esencia", brand.personality.essence],
                ["Voz", brand.personality.voice],
                ["Estética", brand.personality.aesthetic]
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl p-4 border border-line bg-surface/20">
                  <p className="type-caption">{k}</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">{v}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </SectionShell>
  );
}
