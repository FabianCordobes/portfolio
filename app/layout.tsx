import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabián Cordobés — Diseño y desarrollo de experiencias digitales",
  description:
    "Landing pages, sitios web, e-commerce, aplicaciones, automatización y mantenimiento con una mirada de diseño, producto y desarrollo full-stack.",
  metadataBase: new URL("https://portfolio-hazel-six-lrkttprbjn.vercel.app"),
  openGraph: {
    title: "Fabián Cordobés — Experiencias digitales",
    description:
      "Diseño y desarrollo de landing pages, sitios web, e-commerce, aplicaciones y automatizaciones.",
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
