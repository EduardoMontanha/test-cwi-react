import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { NotificationContainer } from 'react-notifications';
import PrivateRoute from './routes/components/PrivateRoute';
import Add from './routes/Add';
import Dragon from './routes/Dragon';
import Dragons from './routes/Dragons';
import { Error404 } from './routes/Errors';
import Footer from './routes/components/Footer';
import Login from './routes/Login';


function App() {
    const [auth, setAuth] = useState(false);

    return (
        <LanguageProvider>
            <AuthContext.Provider value={{ auth, setAuth }}>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <PrivateRoute exact path="/" component={Dragons} />
                        <PrivateRoute path="/dragao/:id" component={Dragon} />
                        <PrivateRoute path="/adicionar" component={Add} />
                        <Route path="" component={Error404} />
                    </Switch>

                    <Footer />

                    <NotificationContainer />
                </Router>
            </AuthContext.Provider>
        </LanguageProvider>
    );
}

export default App;