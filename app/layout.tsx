import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Fabián Cordobés — Digital Product · AI · Automation",
  description:
    "IA aplicada, producto digital, microservicios, automatización, tiempo real e integraciones para construir experiencias que miran hacia adelante.",
  metadataBase: new URL("https://portfolio-hazel-six-lrkttprbjn.vercel.app"),
  openGraph: {
    title: "Fabián Cordobés — Digital Product · AI · Automation",
    description:
      "IA, producto digital, microservicios, WebSocket, NoSQL y experiencias inmersivas para construir lo que sigue.",
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
