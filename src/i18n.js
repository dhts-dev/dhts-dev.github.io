import i18n from 'https://unpkg.com/i18next/dist/es/i18next.js';
import { initReactI18next } from 'https://unpkg.com/react-i18next/dist/es/initReactI18next.js';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Sunvi Hi-Tech',
      tagline: 'Empowering Careers, Connecting Talent',
      select_language: 'Select Your Language',
      // ...add more keys as needed
    },
  },
  hi: {
    translation: {
      welcome: 'सुनवी हाई-टेक में आपका स्वागत है',
      tagline: 'करियर को सशक्त बनाना, प्रतिभा को जोड़ना',
      select_language: 'अपनी भाषा चुनें',
      // ...add more keys as needed
    },
  },
  // Add more languages here
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;