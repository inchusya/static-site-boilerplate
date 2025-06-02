async function setLanguage(lang) {
    const res = await fetch(`lang/${lang}.json`);
    const translations = await res.json();
    for (const key in translations) {
      const el = document.querySelector(`[data-i18n="${key}"]`);
      if (el) el.textContent = translations[key];
    }
    localStorage.setItem('lang', lang);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
  });
  