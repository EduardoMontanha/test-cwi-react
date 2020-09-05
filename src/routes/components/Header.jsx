import React, { useContext, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext';
import Text from './Text';
import logo from '../../assets/images/logo.png';
import useWindowSize from '../../hooks/useWindowSize';

function Header() {
    const auth = useContext(AuthContext);
    const [isMobile, setIsMobile] = useState(true);
    const [hideMenu, setHideMenu] = useState(true);
    const pageId = "header";

    useEffect(() => {
        const size = useWindowSize();

        if (size.width >= 1024) {
            setIsMobile(false);
            setHideMenu(false);
        } else {
            setIsMobile(true);
            setHideMenu(true);
        }
    });

    const handleLogout = () => {
        auth.setAuth(false);
        return <Redirect to="/login" />;
    }

    function toggleMenu() {

        console.log(isMobile, hideMenu, !hideMenu);
        console.log(size)

        if (isMobile) {
            setHideMenu(!hideMenu);
        }
    }

    return (
        <header>
            <div className="container">
                <Link className="logo" to="/"><img src={logo} alt="Logo" /></Link>

                <button className="nav-bar-toggler" onClick={() => toggleMenu()}>
                    <div id="burger-icon">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </div>
                </button>

                <nav className={`nav-links ${hideMenu ? 'hide' : ''}`}>
                    <ul>
                        <li className="nav-item">
                            <Link to="/" onClick={() => toggleMenu()}>
                                <Text pageId={pageId} tid="dragons" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/adicionar" onClick={() => toggleMenu()}>
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