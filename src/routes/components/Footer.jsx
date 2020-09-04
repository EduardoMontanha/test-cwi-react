import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import logo from '../../assets/images/logo.png'


function Footer () {

    return (
        <footer>
            <div className="container">
                <div className="copy">
                    <a href="https://www.linkedin.com/in/eduardomontanha/" target="_blank" rel="noopener noreferrer">
                        Eduardo Montanha
                    </a>
                    &nbsp;&copy; 2020
                </div>

                <Link className="logo" to="/"><img src={logo} alt="Logo" /></Link>

                <LanguageSelector />
            </div>
        </footer>
    );
}

export default Footer;