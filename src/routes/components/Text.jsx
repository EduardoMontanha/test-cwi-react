import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

function Text ({ pageId, tid}) {
    const languageContext = useContext(LanguageContext);
    
    if (!!languageContext.langData[pageId] && languageContext.langData[pageId][tid]) {
        return languageContext.langData[pageId][tid];
    } else {
        return `{${tid}}`;
    }
};

export default Text;