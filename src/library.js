import { initLanguage, setLanguage } from './lang.js';

window.setLanguage = setLanguage;
initLanguage();
// language.js (или lang.js)
export function initLanguage() {
    const saved = localStorage.getItem('language');
    const defaultLang = 'ru';
    const lang = saved || defaultLang;
    localStorage.setItem('language', lang);
    console.log('Установлен язык:', lang);
    loadTranslations(lang);
  }
  