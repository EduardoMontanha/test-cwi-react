import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext';
import Text from './Text';
import logo from '../../assets/images/logo.png';

function Header() {
    const auth = useContext(AuthContext);
    const pageId = "header";

    const handleLogout = () => {
        auth.setAuth(false);
        return <Redirect to="/login" />;
    }

    function toggleMenu() {
        document.querySelector('header').classList.toggle('active');
    }

    return (
        <header>
            <div className="container">
                <Link className="logo" to="/"><img src={logo} alt="Logo" /></Link>

                <button className="nav-bar-toggler" onClick={toggleMenu}>
                    <div id="burger-icon">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </div>
                </button>

                <nav className="nav-links">
                    <ul>
                        <li className="nav-item">
                            <Link to="/">
                                <Text pageId={pageId} tid="dragons" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/adicionar">
                                <Text pageId={pageId} tid="add" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => handleLogout()}>
                                <Text pageId={pageId} tid="logout" />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;