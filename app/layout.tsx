import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabián Cordobés — Landing Pages, Sitios Web y Aplicaciones",
  description:
    "Diseño y desarrollo landing pages, sitios web, e-commerce, aplicaciones, automatizaciones y mantenimiento para marcas, profesionales y empresas.",
  metadataBase: new URL("https://portfolio-hazel-six-lrkttprbjn.vercel.app"),
  openGraph: {
    title: "Fabián Cordobés — Desarrollo Web y Aplicaciones",
    description:
      "Landing pages, sitios web, e-commerce, aplicaciones, automatización y mantenimiento con diseño a medida y experiencia visual premium.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
