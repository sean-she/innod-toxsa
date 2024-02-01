import React from "react";
import Header from "../Header/header";
import "./hero.css";
import mobileimage from "../../images/home-hero-mobile.png";

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
                            Our meetings are on Mondays 8-9 PM
                        </h1>
                        <h1 class="headerh1">
                            Simply fill out the interest form below
                        </h1>
                    </div>
                    <a
                        className="button"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfBs0XcPcaEjKc4qPdRYLtHI3h1qupbUryJJnFijvtB0_kyeQ/viewform"
                    >
                        Interest form
                    </a>
                </div>
                <img id="mobile-hero-image" src={mobileimage}></img>
            </div>
        </section>
    );
}
