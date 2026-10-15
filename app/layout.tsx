import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://portfolio-hazel-six-lrkttprbjn.vercel.app";
const siteTitle = "Fabián Ariel Cordobés | Desarrollo Web y Soluciones Digitales";
const siteDescription =
  "Fabián Ariel Cordobés, Full Stack Developer con foco Backend. Desarrollo de sitios web, APIs, aplicaciones y sistemas con TypeScript, Node.js, NestJS, AWS y React.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "imXU0a7pJNG6lfKp2PgeDE2bRmypaL_QJ1p34AmQ_n0",
  },
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Fabián Cordobés — Desarrollo web y software",
      url: siteUrl,
      inLanguage: "es-AR",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Fabián Ariel Cordobés",
      alternateName: "Fabián Cordobés",
      url: `${siteUrl}/portfolio`,
      mainEntityOfPage: `${siteUrl}/portfolio`,
      jobTitle: "Full Stack Developer",
      description: "Full Stack Developer con especialización Backend en TypeScript, Node.js, NestJS y AWS.",
      knowsAbout: [
        "TypeScript",
        "Node.js",
        "NestJS",
        "AWS",
        "PostgreSQL",
        "React",
        "Next.js",
      ],
      sameAs: [
        "https://www.linkedin.com/in/fabi%C3%A1n-ariel-cordob%C3%A9s-956539234/",
        "https://github.com/FabianCordobes",
      ],
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
