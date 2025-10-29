
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';
import enHomeTranslation from './locales/en/home.json';
import arHomeTranslation from './locales/ar/home.json';
import enAboutTranslation from './locales/en/about.json';
import arAboutTranslation from './locales/ar/about.json';

// Add RTL direction support
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: { ...enTranslation, ...enHomeTranslation, ...enAboutTranslation },
      },
      ar: {
        translation: { ...arTranslation, ...arHomeTranslation, ...arAboutTranslation },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    // Add language-specific configurations
    lng: 'ar', // Default to Arabic
  });

// Add direction helper function
i18n.dir = (lng?: string) => {
  const language = lng || i18n.language;
  return language === 'ar' ? 'rtl' : 'ltr';
};

// Update document direction when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = i18n.dir(lng);
  document.documentElement.lang = lng;
});

// Set initial direction
document.documentElement.dir = i18n.dir();
document.documentElement.lang = i18n.language;

export default i18n;
