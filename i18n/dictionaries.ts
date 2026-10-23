import type { Locale } from "./config";
import es from "../messages/es.json";
import en from "../messages/en.json";

const dictionaries = { es, en };
export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
