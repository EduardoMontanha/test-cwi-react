import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

function Text ({ pageId, tid}) {
    const languageContext = useContext(LanguageContext);
    
    return languageContext.langData[pageId][tid] || '';
};

export default Text;