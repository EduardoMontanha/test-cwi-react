import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import Text from './components/Text';
import { addDragon } from '../services/dragon.services';


function Add () {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const pageId = "add";

    const createDragon = () => {
        if (!!name && !!type) {
            const request = addDragon(name, type);

            request
                .then(res => {
                    if (res.ok) {
                        NotificationManager.success(<Text pageId={pageId} tid="notify-suc-create" />);

                        //Clean inputs
                        setName('');
                        setType('');
                    } else {
                        NotificationManager.error(<Text pageId={pageId} tid="notify-err-network" />);
                    }
                })
                .catch(err => {
                    NotificationManager.error(<Text pageId={pageId} tid="notify-err-request" /> + err.message);
                });

        } else {
            if (!name) {
                NotificationManager.error(<Text pageId={pageId} tid="notify-err-name" />);
            }

            if (!type) {
                NotificationManager.error(<Text pageId={pageId} tid="notify-err-type" />);
            }
        }
    }

    return (
        <main id="add">
            <div className="container">
                <h1>
                    <Text pageId={pageId} tid="title" />
                </h1>

                <form onSubmit={event => {
                    event.preventDefault();
                    createDragon();
                }}>
                    <label><Text pageId={pageId} tid="l-name" /></label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoComplete="off" />

                    <label><Text pageId={pageId} tid="l-type" /></label>
                    <input
                        type="text"
                        id="type"
                        value={type}
                        onChange={e => setType(e.target.value)}
                        autoComplete="off" />

                    <button type="submit" disabled={!name || !type}>
                        <Text pageId={pageId} tid="button" />
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Add;