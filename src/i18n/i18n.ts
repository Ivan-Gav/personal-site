import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // lng: 'en', // if you're using a language detector, do not define the lng option
    defaultNS: 'translation',
    debug: true,
    supportedLngs: ['en', 'de', 'ru'],
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: [
        'localStorage',
        'navigator',
        'htmlTag',
        'cookie',
        'path',
        'subdomain',
      ],
      caches: ['localStorage'],
    },
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next.d.ts options)
    // returnNull: false,
  });
