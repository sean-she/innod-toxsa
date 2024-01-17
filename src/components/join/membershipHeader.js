import React from "react";
import Header from "../header/header";
import "./membershipHeader.css"; // Import the CSS file
import heroMembership from "../../images/heroMembership.png";

export default function MembershipHeader() {
    return (
        <section id="join-hero" className="hero">
            <Header></Header>
            <div className="join-hero-container">
                <div className="join-hero-content-container">
                    <div className="join-hero-text-container">
                        <h1 class="headerh1">
                            Anyone passionate about toxicology is welcome!
                        </h1>
                        <h1 class="headerh1">
                            Our meetings are on Mondays 8–9 PM
                        </h1>
                        <h1 class="headerh1">
                            Simply fill out the interest form below
                        </h1>
                    </div>
                    <button className="interest-button">Interest Form</button>
                </div>
            </div>
        </section>
    );
}
