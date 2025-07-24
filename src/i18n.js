
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../public/locales/translationEN/translation.json';
import translationAr from '../public/locales/translationAr/translation.json';


const resources = {
  
  en: {
    global: translationEN
  },
  ar: {
    global: translationAr
  }
};
const currentLang = localStorage.getItem('i18nextLng') || 'en';
localStorage.setItem('i18nextLng', currentLang);

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: currentLang, 
    fallbackLng: 'en', 

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
