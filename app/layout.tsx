import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Fabián Cordobés — Producto, aplicaciones y soluciones digitales",
  description:
    "Diseño y desarrollo productos, aplicaciones, integraciones y soluciones digitales para empresas y equipos que necesitan convertir una necesidad de negocio en software.",
  metadataBase: new URL("https://portfolio-hazel-six-lrkttprbjn.vercel.app"),
  openGraph: {
    title: "Fabián Cordobés — Producto y soluciones digitales",
    description:
      "Desarrollo de producto, aplicaciones, automatización e integraciones con foco en problemas reales de negocio.",
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
