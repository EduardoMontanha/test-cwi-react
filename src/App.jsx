import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { NotificationContainer } from 'react-notifications';
import PrivateRoute from './routes/PrivateRoute';
import LanguageSelector from './routes/components/LanguageSelector';
import Login from './routes/Login';
import Dragon from './routes/Dragon';
import Dragons from './routes/Dragons';
import Header from './routes/components/Header';

function App() {
    const [auth, setAuth] = useState(false);

    return (
        <LanguageProvider>
            <AuthContext.Provider value={{ auth, setAuth }}>
                <LanguageSelector />

                <Router>
                    <Header />

                    <Switch>
                        <Route path="/login" exact component={Login} />
                        <PrivateRoute exact path="/" component={Dragons} />
                        <PrivateRoute path="/dragon" component={Dragon} />
                    </Switch>
                </Router>

                <NotificationContainer />

            </AuthContext.Provider>
        </LanguageProvider>
    );
}

export default App;