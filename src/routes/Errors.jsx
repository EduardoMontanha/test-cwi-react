import React from 'react';
import { Link } from 'react-router-dom';
import Text from './components/Text';

const pageId = "errors";

function Error404 () {
    const pageType = "404"

    return (
        <main>
            <h1><Text pageId={pageId} pageType={pageType} tid="title" /></h1>
            <p><Text pageId={pageId} pageType={pageType} tid="msg" /></p>

            <Link to="/">
                <Text pageId={pageId} pageType={pageType} tid="cta" />
            </Link>
        </main>
    );
}

export {
    Error404
};