import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import pt from './pt';
import en from './en';
import es from './es';

const STORAGE_KEY = 'saragix_language';

export const DICTIONARIES = { pt, en, es };

export const AVAILABLE_LANGUAGES = [
  { code: 'pt', name: 'Português (Brasil)', short: 'PT', flag: 'BR' },
  { code: 'en', name: 'English', short: 'EN', flag: 'US' },
  { code: 'es', name: 'Español', short: 'ES', flag: 'ES' },
];

const LanguageContext = createContext(null);

/**
 * Função utilitária para buscar chave aninhada em um objeto (ex: "nav.analysis")
 */
function getNestedValue(obj, path) {
  if (!obj || !path) return undefined;
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && DICTIONARIES[saved]) {
        return saved;
      }
      // Detecção de idioma do navegador se disponível
      const navLang = typeof navigator !== 'undefined' ? navigator.language : '';
      if (navLang) {
        const lower = navLang.toLowerCase();
        if (lower.startsWith('en')) return 'en';
        if (lower.startsWith('es')) return 'es';
      }
    } catch {}
    return 'pt';
  });

  const changeLanguage = useCallback((newLang) => {
    if (DICTIONARIES[newLang]) {
      setLanguageState(newLang);
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {}
    }
  }, []);

  /**
   * Traduz uma chave com suporte a parâmetros e fallback automático
   * Ex: t('common.hello', { name: 'Magnus' })
   */
  const t = useCallback(
    (key, params = {}) => {
      const currentDict = DICTIONARIES[language] || DICTIONARIES.pt;
      let val = getNestedValue(currentDict, key);

      // Fallback para português se a chave não existir no idioma atual
      if (val === undefined && language !== 'pt') {
        val = getNestedValue(DICTIONARIES.pt, key);
      }

      if (val === undefined) {
        return key;
      }

      if (typeof val === 'string' && params && typeof params === 'object') {
        return Object.keys(params).reduce((str, paramKey) => {
          return str.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(params[paramKey]));
        }, val);
      }

      return val;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage: changeLanguage,
      changeLanguage,
      t,
      languages: AVAILABLE_LANGUAGES,
      isEnglish: language === 'en',
      isPortuguese: language === 'pt',
    }),
    [language, changeLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback defensivo caso o hook seja usado fora do Provider
    return {
      language: 'pt',
      setLanguage: () => {},
      changeLanguage: () => {},
      t: (k) => k,
      languages: AVAILABLE_LANGUAGES,
      isEnglish: false,
      isPortuguese: true,
    };
  }
  return ctx;
}
