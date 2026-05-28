/** Contenido del manual de marca AYALMA — fuente única para la web */

export const brandCore = {
  name: "AYALMA",
  purpose:
    "AYALMA nace para combatir la pérdida de identidad cultural en la vestimenta Panzaleo frente a la globalización. Buscamos evolucionar la tradición sin desvincularla de sus raíces, transformando la prenda en un símbolo de orgullo, pertenencia y resistencia cultural en contextos modernos.",
  mission:
    "Rediseñar la indumentaria Panzaleo bajo un enfoque minimalista y contemporáneo. Creamos piezas auténticas mediante el uso de mano de obra artesanal, materiales locales y una integración consciente de simbología cultural para un estilo de vida actual.",
  vision:
    "Ser la marca referente de diseño contemporáneo que posicione la identidad Panzaleo en el mercado nacional e internacional, demostrando que la herencia ancestral y la vanguardia pueden coexistir con elegancia y respeto.",
  values: [
    {
      title: "Identidad y Pertenencia",
      desc: "Fortalecer el vínculo con el origen y el territorio."
    },
    {
      title: "Respeto Cultural",
      desc: "Preservar los saberes ancestrales evitando la apropiación."
    },
    {
      title: "Innovación con Raíz",
      desc: "Reinterpretar la tradición para que trascienda en el tiempo."
    }
  ],
  personality: {
    headline: "AYALMA es consciente, auténtica y elegante.",
    essence: "Una “sabia contemporánea” que proyecta su historia con seguridad.",
    voice: "Clara, profunda y respetuosa; comunica con intención.",
    aesthetic:
      "Sobria y minimalista, donde cada detalle artesanal tiene un propósito funcional y simbólico."
  },
  palette: {
    primary: ["#E7E3E0", "#AB9F94"],
    secondary: ["#B39A82", "#3C3226", "#393939"]
  },
  typography: {
    primary: "Cinzel",
    secondary: "Montserrat",
    display: "Cinzel Decorative"
  },
  audience: {
    title: "El Universo AYALMA",
    desc: "AYALMA se dirige a una generación de nativos culturales y adoptantes conscientes. El núcleo de nuestro público son personas jóvenes y adultas de la cultura Panzaleo que buscan manifestar su identidad en la vida contemporánea."
  },
  personas: {
    femenino: {
      name: "Karla Chango",
      age: "24 años",
      profile: "Universitaria / profesional joven en Ambato.",
      bullets: [
        "Estilo: mezcla básicos modernos (blazers, jeans) con acentos tradicionales en eventos.",
        "Problema: siente que la moda global la desconecta de su raíz y que la ropa tradicional no encaja en su rutina urbana.",
        "Motivación: busca armonía estética. Quiere verse moderna sin renunciar a su orgullo Panzaleo.",
        "Compra por: valor simbólico + diseño minimalista + lujo consciente."
      ]
    },
    masculino: {
      name: "Luis Analuisa",
      age: "28 años",
      profile: "Profesional / emprendedor en Ambato o Quito.",
      bullets: [
        "Estilo: urbano, funcional y sobrio. Usa lo tradicional solo en festividades por falta de opciones diarias.",
        "Problema: percibe la indumentaria cultural como algo “estático” o poco práctico para su trabajo.",
        "Motivación: busca atemporalidad. Quiere piezas versátiles que integren su cultura con sofisticación y seguridad.",
        "Compra por: calidad técnica + funcionalidad + coherencia con la comunidad."
      ]
    }
  },
  designDomains: [
    {
      k: "Usuario",
      v: "El usuario de AYALMA es una persona consciente y con una identidad fuerte. Se divide en dos perfiles: el heredero de la cultura Panzaleo que busca reafirmar sus raíces en la modernidad, y el consumidor consciente que valora la estética con significado."
    },
    {
      k: "Social",
      v: "La marca actúa como un agente de resistencia cultural: fortalece la comunidad Panzaleo, revaloriza el trabajo artesanal local y fomenta un consumo responsable."
    },
    {
      k: "Simbolismo",
      v: "Núcleo de la marca. Cada gráfico, bordado o estructura reinterpreta iconografía ancestral; no es decorativo, es lenguaje."
    },
    {
      k: "Función",
      v: "Diseño para la vida contemporánea: prendas versátiles, cómodas y duraderas, equilibrando utilidad urbana y protección."
    },
    {
      k: "Contexto",
      v: "Glocalización: nace en Tungurahua (Ecuador) y dialoga con estándares internacionales; se adapta a entornos locales y urbanos."
    },
    {
      k: "Técnico",
      v: "Confluencia de procesos: sastrería y patronaje contemporáneo + técnicas artesanales (bordado a mano, telares, materiales locales)."
    },
    {
      k: "Estético",
      v: "Minimalismo cultural: estética depurada, sin saturación; los detalles simbólicos resaltan sobre estructuras limpias."
    },
    {
      k: "Estilo",
      v: "Elegante y atemporal: no persigue tendencias pasajeras; construye un guardarropa de autor con sobriedad."
    },
    {
      k: "Inspiración",
      v: "Cosmovisión Panzaleo: flora andina, geometría sagrada y narrativa de fuerza interior."
    }
  ]
} as const;

export const manualNav = [
  { id: "indice", label: "Índice" },
  { id: "manual", label: "Propósito" },
  { id: "tipografia", label: "Tipografía" },
  { id: "color", label: "Color" },
  { id: "patrones", label: "Patrones" },
  { id: "fotografia", label: "Fotografía" },
  { id: "copy", label: "Copy & tono" },
  { id: "identidad", label: "Logotipo" },
  { id: "aplicaciones", label: "Aplicaciones" },
  { id: "publico", label: "Público" },
  { id: "coleccion", label: "Colección" },
  { id: "galeria", label: "Galería" }
] as const;

export const typographySystem = {
  families: {
    display: {
      name: "Cinzel",
      role: "Titulares, portadas, ceremonial",
      weights: ["400 Regular", "600 SemiBold", "700 Bold"],
      fallback: '"Times New Roman", "Palatino Linotype", Georgia, serif',
      why: "Proporciones clásicas y contraste de trazos similar a Cinzel; mantiene solemnidad editorial sin depender de red."
    },
    ui: {
      name: "Montserrat",
      role: "Cuerpo, UI, captions, CTAs",
      weights: ["400 Regular", "500 Medium", "600 SemiBold"],
      fallback: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      why: "Sans geométrica neutral y legible; sustituye Montserrat cuando el CDN falla, sin romper la jerarquía."
    },
    accent: {
      name: "Cinzel Decorative",
      role: "Acentos puntuales (iniciales, sellos)",
      weights: ["400 Regular"],
      fallback: "Cinzel, Georgia, serif",
      why: "Solo en piezas impresas o hero puntuales; en web se limita para no saturar."
    }
  },
  scale: [
    {
      token: "H1",
      sample: "Raíz que viste.",
      specs: "Cinzel · 400/700 · clamp(44–82px) · leading 0.92 · tracking −0.03em",
      usage: "Portadas, hero editorial, piezas de campaña."
    },
    {
      token: "H2",
      sample: "Manual de identidad",
      specs: "Cinzel · 400 · 34–42px · leading 1.05 · tracking −0.02em",
      usage: "Secciones del manual, titulares de capítulo."
    },
    {
      token: "H3",
      sample: "Sistema de color",
      specs: "Cinzel · 400 · 24–28px · leading 1.15 · tracking −0.01em",
      usage: "Subsecciones, tarjetas destacadas."
    },
    {
      token: "Body",
      sample:
        "Cada prenda integra simbología con función urbana. La narrativa es clara, sin adornos vacíos.",
      specs: "Montserrat · 400 · 16px · leading 1.6 · tracking 0",
      usage: "Párrafos, fichas de producto, descripciones largas."
    },
    {
      token: "Caption",
      sample: "BORDADO A MANO · TUNGURAHUA",
      specs: "Montserrat · 500 · 11–12px · leading 1.4 · tracking +0.12em · uppercase",
      usage: "Metadatos, créditos, etiquetas de galería."
    },
    {
      token: "CTA",
      sample: "Ver colección",
      specs: "Montserrat · 500 · 14px · leading 1 · tracking +0.04em",
      usage: "Botones primarios, enlaces de acción."
    }
  ],
  pairing: "Serif para voz institucional; sans para ritmo y legibilidad. Nunca dos titulares serif consecutivos del mismo peso."
};

export const colorSystem = {
  proportion: { dominant: 70, secondary: 20, accent: 10 },
  proportionDesc:
    "70% fondos claros (arena #E7E3E0) · 20% superficies y tipografía secundaria (#AB9F94, #393939) · 10% acento cálido y énfasis (#B39A82, #3C3226).",
  swatches: [
    { hex: "#E7E3E0", name: "Arena", role: "background", usage: "Fondos web, packaging interior, 70%" },
    { hex: "#AB9F94", name: "Tierra clara", role: "surface", usage: "Tarjetas, bloques, 20%" },
    { hex: "#B39A82", name: "Arcilla", role: "accent", usage: "CTA secundarios, detalles, 10%" },
    { hex: "#3C3226", name: "Cacao", role: "ink", usage: "Texto principal, logo sobre claro" },
    { hex: "#393939", name: "Grafito", role: "ink-muted", usage: "Texto secundario, captions" }
  ],
  semantic: [
    {
      token: "background",
      maps: "#E7E3E0",
      example: "Página completa, márgenes amplios"
    },
    {
      token: "surface",
      maps: "#AB9F94 / paper elevado",
      example: "Cards, modales, bloques de manual"
    },
    {
      token: "ink",
      maps: "#3C3226",
      example: "H1–H3, wordmark, precios"
    },
    {
      token: "ink-muted",
      maps: "#393939",
      example: "Body secundario, metadata"
    },
    {
      token: "accent",
      maps: "#B39A82",
      example: "Enlaces hover, chips activos, sellos"
    }
  ],
  contrast: [
    { pair: "ink sobre background", ratio: "≥ 8.5:1", pass: true },
    { pair: "ink-muted sobre surface", ratio: "≥ 4.8:1", pass: true },
    { pair: "accent sobre background", ratio: "≥ 3.2:1 (UI grande)", pass: true }
  ],
  uiStates: [
    { state: "default", desc: "Borde var(--line), fondo surface al 88%" },
    { state: "hover", desc: "Ink al 85% de opacidad; acento +6% luminosidad" },
    { state: "focus", desc: "Anillo 2px accent · offset 2px · visible en teclado" },
    { state: "disabled", desc: "Opacidad 42%, sin sombra, cursor not-allowed" }
  ]
};

export const patternSystem = {
  variants: [
    { name: "100%", scale: "1", rotation: "0°", opacity: "100%", use: "Packaging, sello, hero puntual" },
    { name: "50%", scale: "0.5", rotation: "0°", opacity: "15%", use: "Forros de caja, interior bolsa" },
    { name: "25%", scale: "0.25", rotation: "45°", opacity: "8%", use: "Fondos web, redes (watermark)" }
  ],
  placements: [
    { place: "Fondo digital", rule: "Opacidad ≤ 8%, nunca detrás de texto body" },
    { place: "Forros / tissue", rule: "Patrón al 12–15%, centrado o esquina inferior" },
    { place: "Packaging", rule: "Una cara dominante; la otra lisa o logo solo" },
    { place: "Redes sociales", rule: "Safe zone 80px; patrón solo en banda inferior 20%" }
  ],
  density: [
    "Margen mínimo al símbolo Chakana: altura del isotipo × 1.5",
    "Máximo 30% del área con patrón visible en una composición",
    "No superponer patrón + foto con grano fuerte (elige uno)"
  ]
};

export const photographyGuide = {
  mood: "Contemplativo, ancestral-presente. Piel y textil con verdad táctil; luz que respeta volumen, no flat stock.",
  framing: [
    "Plano medio y tres cuartos para prendas; macro solo para artesanía",
    "Espacio negativo ≥ 35% en editoriales de marca",
    "Horizonte bajo en paisaje andino; ojo a altura de clavícula en estudio"
  ],
  light: "Luz lateral suave (ventana o softbox 45°); evitar flash frontal. Golden hour en exteriores.",
  texture: "Denim, lana, red y bordado deben leerse a 100% zoom; sin oversharpen.",
  grade: {
    grain: "Grano fino 8–12% en campañas; 0% en catálogo e-commerce",
    contrast: "Curva suave; negros en #3C3226, no puro #000",
    temperature: "Cálida +3 a +5 en piel; neutra en producto sobre fondo arena"
  },
  do: [
    "Modelos con postura serena, mirada a cámara o 15° fuera",
    "Detalle de manos en trabajo artesanal",
    "Coherencia de paleta con #E7E3E0 y #3C3226 en grading"
  ],
  dont: [
    "Filtros saturados tipo “Instagram vintage”",
    "Apropiación performativa sin contexto comunitario",
    "Recortes agresivos que corten símbolos bordados"
  ]
};

export const copyTone = {
  principles: [
    "Voz en primera persona del plural solo en manifiesto; en producto, segunda persona respetuosa (tú).",
    "Frases cortas. Un concepto por oración en UI.",
    "Nombrar origen (Panzaleo, Tungurahua) con precisión, sin folclor vacío."
  ],
  examples: {
    headlines: [
      "Raíz que viste.",
      "Tradición en silencio.",
      "Lo ancestral, hoy."
    ],
    captions: [
      "BORDADO A MANO · AMBATO",
      "DENIM ESTRUCTURADO · COLECCIÓN 01",
      "CHAKANA · SÍMBOLO DE EQUILIBRIO"
    ],
    cta: ["Ver colección", "Conocer el taller", "Reservar pieza"],
    microcopy: [
      "Envío nacional 3–5 días",
      "Talla única artesanal — consultar medidas",
      "Cada pieza lleva historia. Léela en la etiqueta."
    ]
  },
  keywords: [
    "raíz",
    "pertenencia",
    "artesanal",
    "minimalismo cultural",
    "Panzaleo",
    "contemporáneo",
    "resistencia elegante"
  ],
  forbidden: [
    "última moda",
    "exótico",
    "tribal (genérico)",
    "must-have",
    "oferta imperdible",
    "auténtico* (*sin sustento)"
  ]
};

export const applications = {
  cards: {
    size: "90 × 50 mm (estándar EU)",
    bleed: "3 mm por lado",
    safe: "5 mm desde corte",
    grid: "12 columnas · gutter 2 mm",
    front: "Imagotipo centrado vertical; fondo #E7E3E0 o #3C3226 invertido",
    back: "Nombre · cargo · Montserrat 8pt · web · QR opcional 12×12 mm esquina inferior derecha"
  },
  labels: {
    sizes: ["40 × 25 mm (woven)", "35 × 45 mm (hang tag papel)"],
    materials: ["Algodón tejido", "Papel texturizado 300g arena", "Madera laser 3mm (edición)"],
    logo: "Isotipo mínimo 8 mm; wordmark solo si ancho ≥ 30 mm"
  },
  packaging: {
  box: "Caja rígida 280×180×60 mm · interior forro patrón 15%",
    bag: "Bolsa kraft 350×450 mm · asa cinta algodón · sello arcilla #B39A82",
    seal: "Sticker 35 mm circular · isotipo · sin patrón de fondo"
  },
  social: {
    post: "1080 × 1080 px · H2 Cinzel · caption Montserrat 24px · logo 48px margen 64px",
    story: "1080 × 1920 px · safe top/bottom 220px · tipografía solo en tercio inferior",
    templates: "Fondo arena 70% + banda patrón 8% inferior · foto producto 55% superior"
  }
};
