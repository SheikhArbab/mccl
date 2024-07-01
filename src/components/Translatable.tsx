import  { useEffect, FC } from 'react';
import { useLanguage } from '@/hooks/Language';

type Props = {
    text: string | any;
};

const Translatable: FC<Props> = ({ text }) => {
    const { translateText, translatedTexts } = useLanguage();

    useEffect(() => { 
        if (!translatedTexts.has(text)) {
            translateText(text, "en", "");  
        }
    }, [text, translateText, translatedTexts]);

    const translatedText = translatedTexts.get(text) || text;

    return <p data-translate>{translatedText}</p>;
};

export default Translatable;
