import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabián — Desarrollo web & aplicaciones",
  description:
    "Desarrollo páginas web, landing pages y aplicaciones a medida para profesionales, emprendimientos y empresas.",
  metadataBase: new URL("https://portfolio-tawny-iota-93.vercel.app"),
  openGraph: {
    title: "Fabián — Desarrollo web & aplicaciones",
    description:
      "Productos digitales modernos, rápidos y pensados para hacer crecer tu negocio.",
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
