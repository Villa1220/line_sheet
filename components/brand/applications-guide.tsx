import { SectionShell } from "@/components/brand/section-shell";
import { Reveal } from "@/components/reveal";
import { applications } from "@/lib/brand-guidelines";

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-line text-xs">
      <span className="text-muted">{label}</span>
      <span className="text-ink text-right font-medium max-w-[65%]">{value}</span>
    </div>
  );
}

function MockCard({ variant }: { variant: "front" | "back" }) {
  const dark = variant === "back";
  return (
    <div
      className="aspect-[90/50] w-full max-w-[280px] rounded-lg border border-line shadow-soft flex flex-col items-center justify-center p-4 mx-auto"
      style={{
        background: dark ? "var(--brand-cacao)" : "var(--brand-arena)",
        color: dark ? "var(--brand-arena)" : "var(--brand-cacao)"
      }}
    >
      {variant === "front" ? (
        <>
          <div
            className="w-10 h-10 rounded-sm border-2 mb-2 opacity-80"
            style={{ borderColor: "currentColor" }}
            aria-hidden
          />
          <span className="font-display text-lg tracking-widest">AYALMA</span>
        </>
      ) : (
        <div className="text-[10px] font-sans text-center space-y-1 w-full">
          <p className="font-medium">María Panzaleo</p>
          <p className="opacity-70">Directora creativa</p>
          <p className="opacity-70 mt-2">ayalma.ec · Ambato</p>
          <div
            className="w-8 h-8 border border-current opacity-40 rounded mt-3 ml-auto"
            aria-label="QR"
          />
        </div>
      )}
    </div>
  );
}

function MockSocial({ format }: { format: "post" | "story" }) {
  const story = format === "story";
  return (
    <div
      className={`relative border border-line rounded-xl overflow-hidden bg-background mx-auto ${
        story ? "aspect-[9/16] max-w-[140px]" : "aspect-square max-w-[160px]"
      }`}
    >
      <div
        className="absolute inset-x-0 top-0 h-[55%] bg-surface/60"
        style={{ borderBottom: "1px solid var(--line)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[20%] pattern-tile opacity-[0.08]"
        aria-hidden
      />
      <div className={`absolute ${story ? "bottom-16 left-3 right-3" : "bottom-4 left-3 right-3"}`}>
        <p className="font-display text-[11px] leading-tight">Tradición en silencio.</p>
        <p className="type-caption mt-1 scale-90 origin-left">COLECCIÓN 01</p>
      </div>
      <div className="absolute top-3 left-3 w-6 h-6 border border-ink/30 rounded-sm" />
    </div>
  );
}

export function ApplicationsGuideSection() {
  const a = applications;

  return (
    <SectionShell
      id="aplicaciones"
      chip="Aplicaciones"
      title="Especificación de piezas"
      lead="Tarjetas, etiquetas, empaques y redes con medidas alineadas al manual Canva."
    >
      <div className="grid gap-4">
        <div className="grid lg:grid-cols-2 gap-4">
          <Reveal>
            <article className="card p-6 md:p-7">
              <p className="type-caption">Tarjeta de presentación</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] uppercase text-muted mb-2">Anverso</p>
                  <MockCard variant="front" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-muted mb-2">Reverso</p>
                  <MockCard variant="back" />
                </div>
              </div>
              <div className="mt-5">
                <SpecRow label="Tamaño" value={a.cards.size} />
                <SpecRow label="Bleed" value={a.cards.bleed} />
                <SpecRow label="Zona segura" value={a.cards.safe} />
                <SpecRow label="Grilla" value={a.cards.grid} />
                <SpecRow label="Anverso" value={a.cards.front} />
                <SpecRow label="Reverso" value={a.cards.back} />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.04}>
            <article className="card p-6 md:p-7">
              <p className="type-caption">Etiquetas</p>
              <div className="mt-4 flex gap-3 justify-center">
                {a.labels.sizes.map((size) => (
                  <div
                    key={size}
                    className="rounded border-2 border-dashed border-line flex items-center justify-center text-[9px] text-center p-2 text-muted"
                    style={{
                      width: size.includes("40") ? 80 : 70,
                      height: size.includes("40") ? 50 : 90
                    }}
                  >
                    {size}
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <SpecRow label="Materiales" value={a.labels.materials.join(" · ")} />
                <SpecRow label="Logo" value={a.labels.logo} />
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.06}>
          <article className="card p-6 md:p-7">
            <p className="type-caption">Empaques</p>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {[
                { k: "Caja", v: a.packaging.box },
                { k: "Bolsa", v: a.packaging.bag },
                { k: "Sello", v: a.packaging.seal }
              ].map((x) => (
                <div key={x.k} className="rounded-2xl p-4 border border-line bg-surface/30">
                  <p className="text-sm font-medium">{x.k}</p>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">{x.v}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="card p-6 md:p-7">
            <p className="type-caption">Redes sociales</p>
            <div className="mt-4 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <MockSocial format="post" />
                <p className="type-caption mt-3">Post</p>
                <p className="text-[10px] text-muted mt-1">{a.social.post}</p>
              </div>
              <div className="text-center">
                <MockSocial format="story" />
                <p className="type-caption mt-3">Story</p>
                <p className="text-[10px] text-muted mt-1 max-w-[160px]">{a.social.story}</p>
              </div>
            </div>
            <p className="mt-6 text-xs text-ink-muted text-center">{a.social.templates}</p>
          </article>
        </Reveal>
      </div>
    </SectionShell>
  );
}
