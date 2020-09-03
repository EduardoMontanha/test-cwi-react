import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import Text from './components/Text';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';


function Login () {
    const auth = useContext(AuthContext);
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    let sampleEmail = "test@test.com";
    let samplePass = "12345";

    const handleSubmit = () => {
        if (email === sampleEmail && password === samplePass) {
            auth.setAuth(true);
        } else {
            if (email !== sampleEmail) {
                NotificationManager.error('Email incorrect!');
            }

            if (password !== samplePass) {
                NotificationManager.error('Password incorrect!');
            }
        }
    }

    if (auth.auth) {
        return <Redirect to="/" />;
    }

    return (
        <main id="login">
            <Text pageId="login" tid="title" />

            <form onSubmit={event => {
                event.preventDefault();
                handleSubmit();
            }}>
                <label>E-mail</label>
                <input
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    autoComplete="off" />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    autoComplete="off" />

                <button type="submit">Logar</button>
            </form>
        </main>
    );
}

export default Login;