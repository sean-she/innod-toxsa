import React from "react";
import { Helmet } from "react-helmet";

import "./body.css";

import HeroImage from "../../images/join-hero.png";

import Hero from "./Hero";
import Footer from "../footer/footer";
import MemberBenefits from "./MemberBenefits";
import Events from "./Events";

function Membership() {
    return (
        <>  
            <Helmet>
                <title>Membership | UC Berkeley ToxSA</title>
            </Helmet>
            <section className="hero-section">
                <Hero />
                <img id="join-hero-image" src={HeroImage} alt="join-hero"></img>
            </section>
            <MemberBenefits></MemberBenefits>
            <Events></Events>
            <Footer></Footer>
        </>
    );
}

export default Membership;
