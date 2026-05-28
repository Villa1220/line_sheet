import { ApplicationsGuideSection } from "@/components/brand/applications-guide";
import { AudienceSection } from "@/components/brand/audience-section";
import { BrandFoundationSection } from "@/components/brand/brand-foundation";
import { ColorSystemSection } from "@/components/brand/color-system";
import { CopyToneSection } from "@/components/brand/copy-tone";
import { IdentityLogosSection } from "@/components/brand/identity-logos";
import { ManualToc } from "@/components/brand/manual-toc";
import { PatternSystemSection } from "@/components/brand/pattern-system";
import { PhotographyGuideSection } from "@/components/brand/photography-guide";
import { TypographySystemSection } from "@/components/brand/typography-system";
import { BrandLogo } from "@/components/brand-logo";
import { CatalogGrid, type CatalogItem } from "@/components/catalog-grid";
import { LookbookGallery } from "@/components/lookbook-gallery";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { copyTone, manualNav } from "@/lib/brand-guidelines";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const catalog: CatalogItem[] = [
  {
    file: "Gemini_Generated_Image_ (1).png",
    name: "Chaqueta Origen (Azul)",
    category: "Outerwear",
    price: "$220",
    details: "Denim · vistas textiles · silueta relajada"
  },
  {
    file: "Gemini_Generated_Image_ (2).png",
    name: "Chaqueta Origen (Índigo)",
    category: "Outerwear",
    price: "$220",
    details: "Denim · cuello textil · acabado clean"
  },
  {
    file: "Gemini_Generated_Image_ (3).png",
    name: "Jean Flare Geométrico (Gris)",
    category: "Bottoms",
    price: "$140",
    details: "Flare · paneles contrastados · costuras visibles"
  },
  {
    file: "Gemini_Generated_Image_ (4).png",
    name: "Jean Flare Geométrico (Negro)",
    category: "Bottoms",
    price: "$140",
    details: "Flare · líneas de corte · denim oscuro"
  },
  {
    file: "Gemini_Generated_Image_ (5).png",
    name: "Capa Vestido Línea",
    category: "Dresses",
    price: "$320",
    details: "Denim estructurado · manga capa · cierre frontal"
  },
  {
    file: "Gemini_Generated_Image_ (6).png",
    name: "Jean Bordado Ímpetu",
    category: "Bottoms",
    price: "$160",
    details: "Recto · bordado inferior · pespuntes cálidos"
  },
  {
    file: "Gemini_Generated_Image_ (7).png",
    name: "Chaqueta Taller (Kimono)",
    category: "Outerwear",
    price: "$240",
    details: "Denim negro · bolsillos utilitarios · cierre frontal"
  },
  {
    file: "Gemini_Generated_Image_ (8).png",
    name: "Top Fragmento Textil",
    category: "Tops",
    price: "$110",
    details: "Denim · patchwork protagonista · dobladillo crudo"
  },
  {
    file: "Gemini_Generated_Image_ (9).png",
    name: "Pantalón Volumen",
    category: "Bottoms",
    price: "$150",
    details: "Baggy · pinzas · caída pesada"
  },
  {
    file: "Gemini_Generated_Image_ (10).png",
    name: "Bomber Cierre & Cinturón",
    category: "Outerwear",
    price: "$260",
    details: "Cierres metálicos · cintura fruncida · cinturón"
  },
  {
    file: "Gemini_Generated_Image_ (11).png",
    name: "Top Lazo Escultórico",
    category: "Tops",
    price: "$180",
    details: "Denim · moño estructural · pieza statement"
  },
  {
    file: "Gemini_Generated_Image_ (22).png",
    name: "Vestido Red Andina (Vino)",
    category: "Dresses",
    price: "$620",
    details: "Vestido largo · trabajo de red · detalle artesanal"
  },
  {
    file: "Gemini_Generated_Image_ (23).png",
    name: "Vestido Red Andina (Arena)",
    category: "Dresses",
    price: "$620",
    details: "Vestido largo · textura perlada · acabado editorial"
  },
  {
    file: "Gemini_Generated_Image_ (24).png",
    name: "Vestido Constelación (Borgoña)",
    category: "Dresses",
    price: "$680",
    details: "Estructura · bordado tipo constelación · hombro gráfico"
  },
  {
    file: "Gemini_Generated_Image_ (25).png",
    name: "Vestido Ceremonia (Oro)",
    category: "Dresses",
    price: "$890",
    details: "Gala · geometría bordada · accesorios integrados"
  },
  {
    file: "Gemini_Generated_Image_ (26).png",
    name: "Vestido Perla (Marfil)",
    category: "Dresses",
    price: "$740",
    details: "Strapless · bordado circular · falda en capas"
  }
];

const editorialImages = [
  {
    file: "Gemini_Generated_Image_ (14).png",
    name: "Boutique · interior",
    category: "Editorial",
    alt: "Interior boutique AYALMA"
  },
  {
    file: "Gemini_Generated_Image_ (13).png",
    name: "Vitrina · Impetu",
    category: "Editorial",
    alt: "Vitrina editorial AYALMA"
  },
  {
    file: "Gemini_Generated_Image_ (17).png",
    name: "Campaña · paisaje",
    category: "Campaña",
    alt: "Modelo en paisaje andino"
  },
  {
    file: "Gemini_Generated_Image_ (16).png",
    name: "Campaña · estudio",
    category: "Campaña",
    alt: "Modelo en espacio minimalista"
  },
  {
    file: "Gemini_Generated_Image_ (20).png",
    name: "Moodboard · colección",
    category: "Editorial",
    alt: "Moodboard de colección y detalles"
  },
  {
    file: "Gemini_Generated_Image_ (21).png",
    name: "Flatlay · Sabiduría Andina",
    category: "Editorial",
    alt: "Flatlay de marca AYALMA"
  },
  {
    file: "Gemini_Generated_Image_ (19).png",
    name: "Tags · madera",
    category: "Packaging",
    alt: "Tags de madera y cuerda"
  },
  {
    file: "Gemini_Generated_Image_ (15).png",
    name: "Detalle · bordado",
    category: "Artesanía",
    alt: "Detalle macro de bordado"
  },
  {
    file: "Gemini_Generated_Image_ (18).png",
    name: "Patrón · geométrico",
    category: "Gráfico",
    alt: "Patrón geométrico repetible"
  },
  {
    file: "Gemini_Generated_Image_ (12).png",
    name: "Universo AYALMA",
    category: "Editorial",
    alt: "Universo visual AYALMA"
  }
];

const heroImage = "Gemini_Generated_Image_ (12).png";

export default function Home() {
  const headline = copyTone.examples.headlines[0];
  const subline =
    "Indumentaria Panzaleo contemporánea. Manual de marca aplicado: tipografía, color, patrón y piezas listas para producción.";

  return (
    <main>
      <SiteHeader />

      <section className="container-x pt-14 pb-10 md:pt-20 section-anchor" id="inicio">
        <div className="grid-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="chip inline-flex">Manual de marca · Colección 01</p>
              <h1 className="type-h1 mt-5">{headline}</h1>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="type-body mt-6 max-w-xl">{subline}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#indice" className="btn-primary">
                  Explorar manual <ArrowRight size={16} aria-hidden />
                </a>
                <a href="#coleccion" className="btn-secondary">
                  Ver colección
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-10 flex flex-wrap gap-2">
                {copyTone.keywords.slice(0, 5).map((w) => (
                  <span key={w} className="chip">
                    {w}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5 mt-10 lg:mt-0">
            <Reveal delay={0.14}>
              <div className="card overflow-hidden">
                <div className="relative h-[280px] md:h-[320px]">
                  <Image
                    src={`/images/${encodeURIComponent(heroImage)}`}
                    alt="Universo visual AYALMA"
                    fill
                    priority
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 50%, color-mix(in oklch, var(--brand-cacao) 55%, transparent))"
                    }}
                  />
                  <p
                    className="absolute bottom-5 left-5 right-5 type-caption"
                    style={{ color: "var(--brand-arena)" }}
                  >
                    BORDADO A MANO · TUNGURAHUA
                  </p>
                </div>
                <div className="p-5 md:p-6 border-t border-line">
                  <p className="type-h3 text-xl">Lo ancestral, hoy.</p>
                  <p className="type-body-sm mt-2">
                    Sistema visual 70/20/10 · Cinzel + Montserrat · patrones al 8% en digital.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ManualToc />
      <BrandFoundationSection />
      <TypographySystemSection />
      <ColorSystemSection />
      <PatternSystemSection />
      <PhotographyGuideSection />
      <CopyToneSection />
      <IdentityLogosSection />
      <ApplicationsGuideSection />
      <AudienceSection />

      <section className="container-x pb-10 section-anchor" id="coleccion">
        <div className="hairline" />
        <div className="grid-12 py-10">
          <Reveal className="col-span-12 md:col-span-4">
            <p className="chip inline-flex">Colección</p>
            <h2 className="type-h2 mt-4">Piezas con raíz</h2>
            <p className="type-body-sm mt-3 max-w-sm">
              Proporción, caída y textura primero. Denim estructurado y bordado con intención simbólica.
            </p>
          </Reveal>
          <div className="col-span-12 md:col-span-8 mt-8 md:mt-0">
            <Reveal>
              <CatalogGrid items={catalog} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x pb-16 section-anchor" id="galeria" aria-label="Galería editorial">
        <div className="hairline" />
        <div className="py-10">
          <Reveal className="mb-8">
            <p className="chip inline-flex">Galería</p>
            <h2 className="type-h2 mt-4">Alfabeto visual</h2>
            <p className="type-body-sm mt-3 max-w-lg">
              Referencia de encuadre, luz lateral y grading cálido. Grano fino solo en campaña.
            </p>
          </Reveal>
          <Reveal>
            <LookbookGallery images={editorialImages} />
          </Reveal>
        </div>
      </section>

      <footer className="container-x pb-12">
        <div className="hairline" />
        <div className="grid-12 py-8 items-start">
          <div className="col-span-12 md:col-span-6">
            <BrandLogo variant="imagotipo" />
            <p className="mt-3 type-caption !normal-case !tracking-normal">
              Diseño contemporáneo con raíz Panzalea · Ambato, Ecuador
            </p>
          </div>
          <nav
            className="col-span-12 md:col-span-6 mt-6 md:mt-0 flex flex-wrap md:justify-end gap-x-5 gap-y-2"
            aria-label="Pie de página"
          >
            {manualNav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="type-body-sm hover:text-accent">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </main>
  );
}
