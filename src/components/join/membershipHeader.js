import React from "react";
import "./membershipHeader.css"; // Import the CSS file
import aboutus from "../../images/aboutus-hero.png";
import heroMembership from "../../images/heroMembership.png";

export default function MembershipHeader() {
    return (
        <section className="membership-header">
            <div className="membership-header-div">
                <img id="membership-header-img" src={heroMembership} />
            </div>
            <div className="headerText">
                <h1 class="headerh1">
                    Anyone passionate about toxicology is welcome!
                </h1>
                <h1 class="headerh1">Our meetings are on Mondays 8–9 PM</h1>
                <h1 class="headerh1">
                    Simply fill out the interest form below
                </h1>
                <button className="interest-button">Interest Form</button>
            </div>
        </section>
    );
}
