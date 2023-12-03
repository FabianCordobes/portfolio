// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json'; // Archivo de traducción en inglés
import translationES from './locales/es.json'; // Archivo de traducción en español

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  },
  lng: 'es', // Establece el idioma predeterminado
  fallbackLng: 'en', // Utiliza español como idioma de respaldo
  interpolation: {
    escapeValue: false, // No escape values para las traducciones interpoladas
  },
});

export const changeLanguage = (language) => {
   i18n.changeLanguage(language);
 };

export default i18n;
