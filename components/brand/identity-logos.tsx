import { SectionShell } from "@/components/brand/section-shell";
import { Reveal } from "@/components/reveal";
import { brandCore } from "@/lib/brand-guidelines";
import Image from "next/image";

const logoVariants = [
  {
    t: "Isotipo",
    d: "Chakana geométrica · favicon y espacios reducidos (mín. 8 mm impreso).",
    img: "/brand/isotipo.svg"
  },
  {
    t: "Wordmark",
    d: "Palabra-marca Cinzel · titulares y navegación.",
    text: "AYALMA"
  },
  {
    t: "Imagotipo",
    d: "Símbolo + palabra-marca · piezas institucionales.",
    img: "/brand/isotipo.svg",
    withWordmark: true
  }
] as const;

export function IdentityLogosSection() {
  return (
    <SectionShell
      id="identidad"
      chip="Identidad visual"
      title="Logotipo · Isotipo · Imagotipo"
      lead="Sistema minimalista: símbolo geométrico, palabra-marca y combinación con zona de respeto."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {logoVariants.map((x, i) => (
          <Reveal key={x.t} delay={0.04 * i}>
            <article className="card overflow-hidden">
              <div className="relative h-[150px] flex flex-col items-center justify-center gap-3 p-6 bg-background">
                {"text" in x ? (
                  <span className="font-display text-3xl tracking-[0.2em] text-ink">{x.text}</span>
                ) : (
                  <>
                    <Image
                      src={x.img}
                      alt={x.t}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    {"withWordmark" in x && x.withWordmark ? (
                      <span className="font-display text-lg tracking-[0.15em]">AYALMA</span>
                    ) : null}
                  </>
                )}
              </div>
              <div className="p-5">
                <p className="text-sm font-medium">{x.t}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{x.d}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <article className="card overflow-hidden mt-4">
          <div className="relative h-[200px] flex items-center justify-center gap-8 p-8 bg-background">
            <Image src="/brand/isotipo.svg" alt="" width={64} height={64} aria-hidden />
            <span className="font-display text-4xl tracking-[0.18em]">AYALMA</span>
          </div>
          <div className="p-6 border-t border-line">
            <p className="text-sm font-medium">Zona de respeto</p>
            <p className="mt-1 text-xs text-ink-muted leading-relaxed">
              Margen mínimo = altura del isotipo × 1.5 en todos los lados. Paleta oficial:{" "}
              {[...brandCore.palette.primary, ...brandCore.palette.secondary].join(" · ")}
            </p>
          </div>
        </article>
      </Reveal>
    </SectionShell>
  );
}
