import React from "react";

import "./body.css";

import HeroImage from "../../images/join-hero.png";

import Hero from "./Hero";
import Footer from "../footer/footer";
import MemberBenefits from "./MemberBenefits";

function Membership() {
    return (
        <>
            <section className="hero-section">
                <Hero />
                <img id="join-hero-image" src={HeroImage}></img>
            </section>
            <MemberBenefits></MemberBenefits>
            <section className="calendar-section">
                <h1 className="membership-coloring">Events</h1>
                <div className="calendar">
                    {/* IMPORT THE REACT CALENDAR PACKAGE HERE */}
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}

export default Membership;
