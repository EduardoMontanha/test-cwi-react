import React from 'react';
import Text from './components/Text';

function Add () {
    const pageId = "add";

    return (
        <main>
            <div className="container">
                <h1>
                    <Text pageId={pageId} tid="title" />
                </h1>
            </div>
        </main>
    );
}

export default Add;