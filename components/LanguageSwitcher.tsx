"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Locale } from "../i18n/config";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const search = useSearchParams();
  function changeLanguage(next: Locale) {
    if (next === locale) return;
    const parts = pathname.split("/");
    if (parts[1] === "es" || parts[1] === "en") parts[1] = next;
    else parts.splice(1, 0, next);
    const query = search.toString();
    router.push(parts.join("/") + (query ? "?" + query : ""));
  }
  return (
    <div className="language-switcher" role="group" aria-label="Language / Idioma">
      {(["es", "en"] as const).map((language) => (
        <button key={language} type="button" onClick={() => changeLanguage(language)}
          aria-pressed={locale === language} lang={language}
          className={locale === language ? "language-option is-active" : "language-option"}>
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
