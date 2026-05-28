import { SectionShell } from "@/components/brand/section-shell";
import { Reveal } from "@/components/reveal";
import { photographyGuide } from "@/lib/brand-guidelines";

export function PhotographyGuideSection() {
  const g = photographyGuide;

  return (
    <SectionShell
      id="fotografia"
      chip="Fotografía"
      title="Dirección de arte"
      lead="Mood, luz, textura y grading alineados con la paleta arena–cacao."
    >
      <div className="grid gap-4">
        <Reveal>
          <article className="card p-6 md:p-7">
            <p className="type-caption">Mood</p>
            <p className="type-body mt-3">{g.mood}</p>
          </article>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          <Reveal delay={0.04}>
            <article className="card p-6 md:p-7">
              <p className="type-caption">Encuadre y luz</p>
              <ul className="mt-3 space-y-2">
                {g.framing.map((x) => (
                  <li key={x} className="text-sm text-ink-muted">
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-muted">{g.light}</p>
              <p className="mt-2 text-sm text-ink-muted">{g.texture}</p>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="card p-6 md:p-7">
              <p className="type-caption">Grano · contraste · temperatura</p>
              <dl className="mt-3 space-y-3">
                <div>
                  <dt className="type-caption">Grano</dt>
                  <dd className="text-sm text-ink-muted mt-1">{g.grade.grain}</dd>
                </div>
                <div>
                  <dt className="type-caption">Contraste</dt>
                  <dd className="text-sm text-ink-muted mt-1">{g.grade.contrast}</dd>
                </div>
                <div>
                  <dt className="type-caption">Temperatura</dt>
                  <dd className="text-sm text-ink-muted mt-1">{g.grade.temperature}</dd>
                </div>
              </dl>
            </article>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Reveal delay={0.08}>
            <article className="card p-6 md:p-7 border-t-2 border-t-accent">
              <p className="type-caption text-accent">Do</p>
              <ul className="mt-3 space-y-2">
                {g.do.map((x) => (
                  <li key={x} className="text-sm text-ink-muted">
                    ✓ {x}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="card p-6 md:p-7 border-t-2 border-t-ink">
              <p className="type-caption">Don&apos;t</p>
              <ul className="mt-3 space-y-2">
                {g.dont.map((x) => (
                  <li key={x} className="text-sm text-ink-muted">
                    ✕ {x}
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
