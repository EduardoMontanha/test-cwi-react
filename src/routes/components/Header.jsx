import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext';

function Header () {
    const auth = useContext(AuthContext);

    const handleLogout = () => {
        auth.setAuth(false);
        return <Redirect to="/login" />;
    }

    return (
        <header>
            <ul>
                <li>
                    <Link to="/dragon">Dragon</Link>
                </li>
                <li>
                    <Link to="/">Dragons</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <button onClick={() => handleLogout()}>Logout</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;