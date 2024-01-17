import React from "react";
import "./hero.css"; // Import the CSS file
import Header from "../Header/header";
import heroImage from "../../images/home-hero.png";

function Hero() {
    return (
        <section className="hero">
            <Header></Header>
            <div className="home-hero-text">
                <h2 id="uc-berkeley">UC Berkeley</h2>
                <h1 className="club-name">Toxicology Student Association</h1>
            </div>
            <div className="hero-image">
                <img src={heroImage} />
            </div>
        </section>
    );
}

export default Hero;
