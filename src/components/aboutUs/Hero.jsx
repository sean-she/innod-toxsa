import React from "react";
import "./hero.css";
import Header from "../Header/header";

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
