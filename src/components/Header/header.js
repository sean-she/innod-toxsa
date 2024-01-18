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
                    Become a member
                </a>
            </nav>
        </header>
    );
}

export default Header;
