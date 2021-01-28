import React from 'react';
import './styles.scss';

const Header = () => {
    return (
        <header className="header">
             <div className="headerWrap">
                <div className="logo">
                    <a>VisualPath.me</a>
                </div>

                <nav className="callToActions">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Log In</a></li>
                    </ul>
                </nav>
            </div>
        </header>
       
    )
};

export default Header;
