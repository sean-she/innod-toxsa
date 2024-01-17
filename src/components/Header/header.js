import React from "react";
import "./header.css"; // Import the CSS file
import logo from "../../images/toxsa_logo.png";
import { Link } from "react-router-dom";
import { About } from "../aboutUs/About.js";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="toxsa logo" />
            <nav className="header-navbar">
                <a href="/" color="4295AF">
                    Home
                </a>
                <a href="/about" color="4295AF">
                    About Us
                </a>
                <a href="https://padlet.com/natalieoh2/toxsa-database-fkzjzhy5hrek34kv">
                    Opportunities
                </a>
                <a href="/join" id="signup-link">
                    Become a Member
                </a>
            </nav>
        </header>
    );
}

export default Header;
