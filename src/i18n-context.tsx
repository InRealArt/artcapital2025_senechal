import React, { createContext, useState, ReactNode } from 'react';
import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';

export type Language = 'en' | 'fr';

export interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  i18n: {
    [key in Language]: typeof enTranslations
  };
}

const i18n: I18nContextType['i18n'] = {
  en: enTranslations,
  fr: frTranslations,
};

export const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => { },
  i18n: i18n,
});

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <I18nContext.Provider value={{ language, setLanguage, i18n }}>
      {children}
    </I18nContext.Provider>
  );
};