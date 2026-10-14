import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://portfolio-hazel-six-lrkttprbjn.vercel.app";
const siteTitle = "Fabián Cordobés | Desarrollo Web y Soluciones Digitales";
const siteDescription =
  "Desarrollo de sitios web, aplicaciones y sistemas a medida con React, Next.js, Node.js y TypeScript. Soluciones digitales para profesionales y empresas.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Fabián Cordobés",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fabián Ariel Cordobés",
  alternateName: "Fabián Cordobés",
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  knowsAbout: [
    "TypeScript",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "Desarrollo web",
  ],
  sameAs: [
    "https://www.linkedin.com/in/fabi%C3%A1n-ariel-cordob%C3%A9s-956539234/",
    "https://github.com/FabianCordobes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
