import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Montserrat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap"
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cinzel-decorative",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "AYALMA — Manual de marca & colección",
  description:
    "Manual de identidad AYALMA: tipografía Cinzel y Montserrat, sistema de color, patrones, fotografía, copy y aplicaciones. Indumentaria Panzaleo contemporánea.",
  openGraph: {
    title: "AYALMA — Manual de marca",
    description: "Diseño contemporáneo con raíz Panzalea. Sistema visual aplicado.",
    type: "website",
    locale: "es_EC"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${montserrat.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
