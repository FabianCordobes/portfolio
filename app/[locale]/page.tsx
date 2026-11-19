import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "../../i18n/config";
import { getDictionary } from "../../i18n/dictionaries";
import Home from "../page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { seo } = getDictionary(locale);
  return { title: seo.title, description: seo.description,
    alternates: { canonical: `/${locale}`, languages: { es: "/es", en: "/en" } },
    openGraph: { title: seo.title, description: seo.description, locale: locale === "es" ? "es_AR" : "en_US", url: `/${locale}` } };
}
export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Home locale={locale} />;
}
