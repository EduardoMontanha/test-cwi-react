import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

function Text ({ pageId, pageType, tid}) {
    const languageContext = useContext(LanguageContext);

    if (!!languageContext && !!languageContext.langData && !!languageContext.langData[pageId]) {
        let pageData = languageContext.langData[pageId];

        if (pageType) {
            if (!!pageData[pageType] && !!pageData[pageType][tid]) {
                return pageData[pageType][tid];
            }
        } else {
            if (!!pageData[tid]) {
                return pageData[tid];
            }
        }
    }

    return `{${tid}}`;
};

export default Text;