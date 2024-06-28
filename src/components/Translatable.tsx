import { useEffect, FC } from 'react';
import { useLanguage } from '@/hooks/Language'; 


type Props = {
    text: string;
};

const Translatable: FC<Props> = ({ text }) => {

    const { language, translateText, translatedTexts } = useLanguage();

    useEffect(() => {

        translateText(text, language);
    }, [text, language, translateText]);

    const translatedText = translatedTexts.get(text) || text;


    return <p data-translate>{translatedText}</p>;
}

export default Translatable