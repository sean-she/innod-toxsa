import React from "react";

import "./body.css";

import HeroImage from "../../images/join-hero.png";

import Hero from "./Hero";
import Footer from "../footer/footer";
import MemberBenefits from "./MemberBenefits";
import Events from "./Events";

function Membership() {
    return (
        <>
            <section className="hero-section">
                <Hero />
                <img id="join-hero-image" src={HeroImage}></img>
            </section>
            <MemberBenefits></MemberBenefits>
            <Events></Events>
            <Footer></Footer>
        </>
    );
}

export default Membership;
