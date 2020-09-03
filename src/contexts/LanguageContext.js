import React, { useState } from 'react';
import en from '../assets/lang/en.lang.json';
import es from '../assets/lang/es.lang.json';
import pt from '../assets/lang/pt.lang.json';

export const languageOptions = {
    en: 'English',
    es: 'Español',
    pt: 'Português'
};

export const langsData = {
    en, es, pt
};

export const LanguageContext = React.createContext({
    lang: 'pt',
    langData: { pt }
});

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('pt');

    const context = {
        lang: lang,
        langData: langsData[lang],
        setLanguage: selected => {
            const newLang = languageOptions[selected] ? selected : 'pt';
            setLang(newLang);
            window.localStorage.setItem('tsr-lang', newLang);
        },
    };

    return (
        <LanguageContext.Provider value={context}>
            {children}
        </LanguageContext.Provider>
    );
};