const URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/';

/**
 * Get dragons from the API
 */
export const getDragons = () => {
    return fetch(URL, {
        method: 'GET'
    });
}

/**
 * Get specific dragon
 */
export const getDragon = (id) => {
    return fetch(URL + id, {
        method: 'GET'
    });
}

/**
 * Add a new dragon
 */
export const addDragon = (name, type) => {
    return fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, type })
    });
}

/**
 * Edit dragon
 */
export const editDragon = (id, name, type) => {
    return fetch(URL + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, type: type })
    });
}

/**
 * Delete dragon
 */
export const deleteDragon = (id) => {
    return fetch(URL + id, {
        method: 'DELETE'
    });
}