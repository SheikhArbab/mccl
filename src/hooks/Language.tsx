// LanguageProvider.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: string;
  translatedTexts: Map<string, string>;
  setLanguage: (lang: string) => void;
  translateText: (text: string, targetLang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {



  const [language, setLanguageState] = useState("en"); // Default language is English
  const [translatedTexts, setTranslatedTexts] = useState(new Map<string, string>()); // Store translated texts

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
  };

  const translateText = async (text: string, targetLang: string) => {


    const url = `https://translation.googleapis.com/language/translate/v2?key=${import.meta.env.VITE_TRANS_KEY}`;

    const body = JSON.stringify({
      q: text,
      source: language,
      target: targetLang
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: any = await response.json();
      const translatedText = data.data.translations[0].translatedText;

      setTranslatedTexts((prevState) => new Map(prevState).set(text, translatedText)); // Update translated texts map

    } catch (error) {
      console.error('Error fetching translation:', error);
    }
  };

  const contextValue: LanguageContextType = {
    language,
    translatedTexts,
    setLanguage,
    translateText,
  };

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};
