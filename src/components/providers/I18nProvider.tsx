import { useState, ReactNode, useCallback } from 'react';
import { I18nContext, Language, translations } from '../../lib/i18n';

interface I18nProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export function I18nProvider({ children, defaultLanguage = 'en' }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let value: any = translations[language];

      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k];
        } else {
          return key;
        }
      }

      return typeof value === 'string' ? value : key;
    },
    [language]
  );

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}
