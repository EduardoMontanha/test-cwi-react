import React from 'react';
import Text from './components/Text';

function Dragon () {
    const pageId = "dragon";

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

export default Dragon;