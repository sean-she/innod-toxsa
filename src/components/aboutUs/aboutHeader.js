import React from "react";
import "./aboutHeader.css"; // Import the CSS file
import Header from "../header/header";

export default function AboutHeader() {
    return (
        <section id="aboutus-hero" className="hero">
            <Header></Header>
            <div className="aboutus-hero-text">
                <h1>
                    ToxSA unites students who are interested in toxicology,
                    pharmacology, environmental health and related fields by
                    providing mentorship, career preparation, networking, and
                    community service opportunities.
                </h1>
            </div>
        </section>
    );
}
