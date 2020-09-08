import React, { useState, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import { useParams } from 'react-router-dom';
import { getDragon, editDragon } from '../services/dragon.services';
import Text from './components/Text';


function Dragon() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [viewOnly, setViewOnly] = useState(true);
    const [updatingMsg, setUpdatingMsg] = useState(false);
    const pageId = "dragon";

    const handleUpdate = () => {
        if (!!id && !!name && !!type) {
            setUpdatingMsg(true);

            const request = editDragon(id, name, type);
            request
                .then(res => {
                    if (res.ok) {
                        setViewOnly(true);
                        setUpdatingMsg(false);

                        NotificationManager.success(<Text pageId={pageId} tid="notify-suc-update" />);
                    }
                })
                .catch(err => {
                    NotificationManager.error(<Text pageId={pageId} tid="notify-err-request" /> + err.message);
                });
        }
    }

    useEffect(() => {
        const request = getDragon(id);

        request
            .then(res => res.json())
            .then(data => {
                //Fix date display
                let createdDate = data.createdAt.replace(/[a-z]+\d+:\d+:\d+(\.\d+[a-z])?/gi, '');
                createdDate = createdDate.split('-');
                createdDate = `${createdDate[2]}/${createdDate[1]}/${createdDate[0]}`;

                setName(data.name);
                setType(data.type);
                setCreatedAt(createdDate);
            })
            .catch(err => {
                NotificationManager.error(<Text pageId={pageId} tid="notify-err-request" /> + err.message);
            });
    }, [id]);

    return (
        <main id="dragon">
            <div className="container">
                <h1>
                    <Text pageId={pageId} tid="title" /> #{id}
                </h1>

                <form onSubmit={e => {
                    e.preventDefault();
                    handleUpdate();
                }}>
                    <label><Text pageId={pageId} tid="l-name" /></label>
                    {!!name ?
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            disabled={viewOnly} />
                        : <span><Text pageId={pageId} tid="loading" /></span>
                    }

                    <label><Text pageId={pageId} tid="l-type" /></label>
                    {!!type ?
                        <input
                            type="text"
                            value={type}
                            onChange={e => setType(e.target.value)}
                            disabled={viewOnly} />
                        : <span><Text pageId={pageId} tid="loading" /></span>
                    }

                    <label><Text pageId={pageId} tid="l-created" /></label>
                    {!!createdAt ?
                        <input
                            type="text"
                            value={createdAt}
                            disabled />
                        : <span><Text pageId={pageId} tid="loading" /></span>
                    }

                    <button type="submit" className={viewOnly ? "hide" : ""}>
                        {updatingMsg ?
                            <Text pageId={pageId} tid="updating" />
                            : <Text pageId={pageId} tid="cta-submit" />
                        }
                    </button>
                </form>

                <button id="edit" className={!viewOnly ? "hide" : ""} onClick={() => setViewOnly(false)}>
                    <Text pageId={pageId} tid="cta-edit" />
                </button>
            </div>
        </main>
    );
}

export default Dragon;