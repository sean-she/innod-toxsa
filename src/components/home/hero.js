import React from "react";
import "./hero.css"; // Import the CSS file
import Header from "../Header/header";
import heroImage from "../../images/hexagon.png"; // Replace 'path_to_your_image.jpg' with the actual path to your image

function Hero() {
    return (
        <section className="home-hero">
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
