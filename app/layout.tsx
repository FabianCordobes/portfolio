import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabián Cordobés — Desarrollo Web, Aplicaciones e IA",
  description:
    "Diseño y desarrollo sitios web, aplicaciones, productos digitales, automatizaciones, IA e integraciones para empresas.",
  metadataBase: new URL("https://portfolio-hazel-six-lrkttprbjn.vercel.app"),
  openGraph: {
    title: "Fabián Cordobés — Desarrollo Web, Aplicaciones e IA",
    description:
      "Webs, aplicaciones, sistemas, IA, automatización e integraciones con foco en producto y experiencia digital.",
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
