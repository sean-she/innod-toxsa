import React, { useState } from "react";

import "./header.css"; // Import the CSS file
import logo from "../../images/toxsa_logo.png";
import hamburgericon from "../../images/hamburger-icon.png";

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const toggleNav = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    return (
        <header className="header">
            <div className="desktop-navbar">
                <a className="imglink" href="/"><img src={logo} alt="toxsa logo" /></a>
                {/* <img src={logo} alt="toxsa logo" /> */}
                <nav className="header-navbar">
                    <a className="link" href="/">
                        Home
                    </a>
                    <a className="link" href="/about">
                        About Us
                    </a>
                    <a
                        className="link"
                        href="https://padlet.com/natalieoh2/toxsa-database-fkzjzhy5hrek34kv"
                    >
                        Opportunities
                    </a>
                    <a className="button" href="/join">
                        Become a Member
                    </a>
                    <img
                        src={hamburgericon}
                        alt="Open navigation"
                        onClick={toggleNav}
                        className="hamburger-icon"
                    ></img>
                </nav>
            </div>
            <nav className={`mobile-navbar ${isNavExpanded ? "expanded" : ""}`}>
                <a className="link" href="/">
                    Home
                </a>
                <a className="link" href="/about">
                    About Us
                </a>
                <a
                    className="link"
                    href="https://padlet.com/natalieoh2/toxsa-database-fkzjzhy5hrek34kv"
                >
                    Opportunities
                </a>
                <a className="button" href="/join">
                    Become a Member
                </a>
            </nav>
        </header>
    );
}

export default Header;
