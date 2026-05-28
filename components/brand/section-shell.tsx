import { Reveal } from "@/components/reveal";
import type { ReactNode } from "react";

export function SectionShell({
  id,
  chip,
  title,
  lead,
  children,
  aside
}: {
  id: string;
  chip: string;
  title: string;
  lead: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="container-x pb-12 section-anchor" id={id}>
      <div className="hairline" />
      <div className="grid-12 py-10 items-start">
        <Reveal className="col-span-12 md:col-span-4">
          <p className="chip inline-flex">{chip}</p>
          <h2 className="type-h2 mt-4">{title}</h2>
          <p className="type-body-sm mt-3 max-w-sm text-ink-muted">{lead}</p>
          {aside}
        </Reveal>
        <div className="col-span-12 md:col-span-8 mt-8 md:mt-0">{children}</div>
      </div>
    </section>
  );
}
