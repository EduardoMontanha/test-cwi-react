import React, { useState, useEffect } from 'react'
import { getDragons, deleteDragon, editDragon } from '../services/dragon.services';
import { NotificationManager } from 'react-notifications';
import { NavLink } from 'react-router-dom';
import Text from './components/Text'
import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiPencil, mdiEye } from '@mdi/js';


function Dragons() {
    const [dragons, setDragons] = useState([]);
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const pageId = "dragons";

    const getDragonsList = () => {
        const request = getDragons();

        request
            .then(res => res.json())
            .then(data => {
                //Sort by name
                data.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });

                setDragons(data);
            })
            .catch(err => {
                NotificationManager.error(<Text pageId={pageId} tid="notify-err-request" /> + err.message);
            });
    }

    const modifyDragon = (id, name, type) => {
        setId(id);
        setName(name);
        setType(type);
    }

    const handleModifyDragon = event => {
        event.preventDefault();

        if (!!id && !!name && !!type) {
            const request = editDragon(id, name, type);

            request
                .then(res => {
                    console.log(res)
                    if (res.ok) {
                        getDragonsList();
                        NotificationManager.success(<Text pageId={pageId} tid="notify-mod-suc" />);
                    }
                })
                .catch(err => {
                    NotificationManager.error(<Text pageId={pageId} tid="notify-err-request" /> + err.message);
                });
        }
    }

    const removeDragon = id => {
        const request = deleteDragon(id);

        request
            .then(res => {
                if (res.ok) {
                    getDragonsList();
                    NotificationManager.success(<Text pageId={pageId} tid="notify-del-suc" />);
                } else {
                    NotificationManager.error(<Text pageId={pageId} tid="notify-err-network" />);
                }
            })
            .catch(err => {
                NotificationManager.error(<Text pageId={pageId} tid="notify-err-request" /> + err.message);
            });
    }

    useEffect(() => {
        getDragonsList();
    }, [])

    return (
        <main id="dragons">
            <div className="container">
                <h1>
                    <Text pageId={pageId} tid="title" />
                </h1>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th><Text pageId={pageId} tid="th-name" /></th>
                                <th><Text pageId={pageId} tid="th-type" /></th>
                                <th><Text pageId={pageId} tid="th-actions" /></th>
                            </tr>
                        </thead>

                        <tbody>
                            {Object.keys(dragons).length > 0 ?
                                Object.keys(dragons).map((dragonKey, index) => {

                                    const dragon = dragons[dragonKey];

                                    return (
                                        <tr key={index}>
                                            <td>{dragon.name}</td>
                                            <td><i className="mdi mdi-trash-can-outline"></i>{dragon.type}</td>
                                            <td>
                                                <NavLink to={`/dragao/${dragon.id}`}>
                                                    <button>
                                                        <Icon path={mdiEye}
                                                            title={<Text pageId={pageId} tid="cta-details" />}
                                                            size={1} />
                                                    </button>
                                                </NavLink>

                                                <button onClick={() => modifyDragon(dragon.id, dragon.name, dragon.type)}>
                                                    <Icon path={mdiPencil}
                                                        title={<Text pageId={pageId} tid="cta-edit" />}
                                                        size={1} />
                                                </button>

                                                <button onClick={() => removeDragon(dragon.id)}>
                                                    <Icon path={mdiTrashCanOutline}
                                                        title={<Text pageId={pageId} tid="cta-delete" />}
                                                        size={1} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                                :
                                null
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default Dragons;