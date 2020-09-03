import React, { useContext, useEffect } from 'react';

import { languageOptions } from '../../contexts/LanguageContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import Select from 'react-select';

function LanguageSelector () {
    const { lang, setLanguage } = useContext(LanguageContext);

    useEffect(() => {
        let defaultLanguage = window.localStorage.getItem('tsr-lang');
        if (!defaultLanguage) {
            defaultLanguage = window.navigator.language.substring(0, 2);
        }
        setLanguage(defaultLanguage);
    }, [setLanguage]);

    const handleLanguageChange = event => {
        setLanguage(event.value);
    }

    const options = Object.keys(languageOptions).map(key => {
        return {value: key, label: languageOptions[key]};
    });

    return (
        <Select
            options={options}
            onChange={event => handleLanguageChange(event)} />
    );
};

export default LanguageSelector;