import React from "react";
import "./hero.css"; // Import the CSS file
import Header from "../header/header";
import heroImage from "../../images/home-hero.png";
import heroImageMobile from "../../images/home-hero-mobile.png";

function Hero() {
    return (
        <section id="home-hero" className="hero">
            <Header></Header>
            <div className="home-hero-text">
                <h2 id="uc-berkeley">UC Berkeley</h2>
                <h1 className="club-name">Toxicology Student Association</h1>
            </div>
            <div className="hero-image-mobile">
                <img src={heroImageMobile}></img>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Toxicology Student Association" />
            </div>
        </section>
    );
}

export default Hero;
