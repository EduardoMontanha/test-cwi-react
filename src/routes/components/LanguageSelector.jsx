import React, { useContext, useEffect } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';

function LanguageSelector () {
    const { setLanguage } = useContext(LanguageContext);

    useEffect(() => {
        let defaultLanguage = window.localStorage.getItem('tsr-lang');
        if (!defaultLanguage) {
            defaultLanguage = window.navigator.language.substring(0, 2);
        }
        setLanguage(defaultLanguage);
    }, [setLanguage]);

    const handleLanguageChange = value => {
        setLanguage(value);
    }

    return (
        <div className="lang-box">
            <button onClick={() => handleLanguageChange("pt")}>
                <i className="flag-icon flag-icon-br"></i>
            </button>
            <button onClick={() => handleLanguageChange("es")}>
                <i className="flag-icon flag-icon-es"></i>
            </button>
            <button onClick={() => handleLanguageChange("en")}>
                <i className="flag-icon flag-icon-us"></i>
            </button>
        </div>
    );
};

export default LanguageSelector;