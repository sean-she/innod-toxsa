import React from 'react';
import './hero.css'; // Import the CSS file
import heroImage from "../../images/hexagon.png"; // Replace 'path_to_your_image.jpg' with the actual path to your image

function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h2 id="uc-berkeley">UC Berkeley</h2>
                <h1 className="club-name">Toxicology</h1>
                <h1 className="club-name">Student</h1>
                <h1 className="club-name">Association</h1>

            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Descriptive alt text here"/>
            </div>
        </section>
    );
}

export default Hero;