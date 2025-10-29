
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';
import enHomeTranslation from './locales/en/home.json';
import arHomeTranslation from './locales/ar/home.json';
import enAboutTranslation from './locales/en/about.json';
import arAboutTranslation from './locales/ar/about.json';
import enCareersTranslation from './locales/en/careers.json';
import arCareersTranslation from './locales/ar/careers.json';
import enContactUsTranslation from './locales/en/contactus.json';
import arContactUsTranslation from './locales/ar/contactus.json';
import enDiningTranslation from './locales/en/dining.json';
import arDiningTranslation from './locales/ar/dining.json';
import enRentalsTranslation from './locales/en/rentals.json';
import arRentalsTranslation from './locales/ar/rentals.json';
import enServicesTranslation from './locales/en/services.json';
import arServicesTranslation from './locales/ar/services.json';
import enTestimonialsTranslation from './locales/en/testimonials.json';
import arTestimonialsTranslation from './locales/ar/testimonials.json';

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
        translation: { ...enTranslation, ...enHomeTranslation, ...enAboutTranslation, ...enCareersTranslation, ...enContactUsTranslation, ...enDiningTranslation, ...enRentalsTranslation, ...enServicesTranslation, ...enTestimonialsTranslation },
      },
      ar: {
        translation: { ...arTranslation, ...arHomeTranslation, ...arAboutTranslation, ...arCareersTranslation, ...arContactUsTranslation, ...arDiningTranslation, ...arRentalsTranslation, ...arServicesTranslation, ...arTestimonialsTranslation },
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
