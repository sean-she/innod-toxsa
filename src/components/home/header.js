import React from 'react';
import './header.css'; // Import the CSS file
import logo from "../../images/toxsa_logo.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="toxsa logo"/>

            <div className="header-navbar">
                <nav>
                    <ul>
                        <li><a href="/" color="4295AF">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/opportunities">Opportunities</a></li>
                        <li><a href="/button" id="signup-link">Become a Member</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;