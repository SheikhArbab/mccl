import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
    translatedTexts: Map<string, string>;
    translateText: (text: string, targetLang: string, source: string) => Promise<string>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
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
    const [translatedTexts, setTranslatedTexts] = useState(new Map<string, string>());

    const translateText = async (text: string, targetLang: string, source: string): Promise<string> => {
        const url = `https://translation.googleapis.com/language/translate/v2?key=${import.meta.env.VITE_TRANS_KEY}`;

        const body = JSON.stringify({
            q: text,
            source: source,
            target: targetLang,
        });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: any = await response.json();
            const translatedText = data.data.translations[0].translatedText;

            setTranslatedTexts((prevState) => new Map(prevState).set(text, translatedText));

            return translatedText;
        } catch (error) {
            console.error('Error fetching translation:', error);
            throw error;
        }
    };

    const contextValue: LanguageContextType = {
        translatedTexts,
        translateText,
    };

    return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};
