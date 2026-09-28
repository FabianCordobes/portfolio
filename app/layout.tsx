import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Fabián Cordobés — Digital Product · AI · Automation",
  description:
    "Experiencias digitales, producto, automatización e integraciones para empresas y equipos que quieren construir su próximo nivel.",
  metadataBase: new URL("https://portfolio-hazel-six-lrkttprbjn.vercel.app"),
  openGraph: {
    title: "Fabián Cordobés — Digital Product · AI · Automation",
    description:
      "Producto digital, experiencias inmersivas, automatización e integraciones para construir lo que sigue.",
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
