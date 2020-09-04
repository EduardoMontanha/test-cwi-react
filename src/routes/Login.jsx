import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import Text from './components/Text';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';


function Login() {
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const pageId = "login";

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
            <div className="container">
                <div className="card">
                    <h1>
                        <Text pageId="login" tid="title" />
                    </h1>

                    <form onSubmit={event => {
                        event.preventDefault();
                        handleSubmit();
                    }}>
                        <label for="email"><Text pageId={pageId} tid={"email"} /></label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            autoComplete="off" />

                        <label for="password"><Text pageId={pageId} tid={"password"} /></label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            autoComplete="off" />

                        <button type="submit" disabled={email === '' || password === ''}>
                            <Text pageId={pageId} tid={"button"} />
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Login;