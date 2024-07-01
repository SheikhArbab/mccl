import { FC } from 'react';
import { useLanguage } from '@/hooks/Language';

type Props = {
    text: string | any;
};

const Translatable: FC<Props> = ({ text }) => {
    const { translatedTexts } = useLanguage();


    const translatedText = translatedTexts.get(text) || text;

    return <p data-translate>{translatedText}</p>;
};

export default Translatable;
