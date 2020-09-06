import React, { useState } from 'react';

function Loading () {
    const [show, toggleLoading] = useState(true);

    return (
        <div className="loading">
            <img src="" alt="Loading logo" />
        </div>
    );
}

export default Loading;