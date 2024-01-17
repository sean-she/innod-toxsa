import React from "react";
import "./membership.css";
import Header from "../Header/header";
import MembershipHeader from "./membershipHeader";
import heroMembership from "../../images/heroMembership.png";
import benefitsImage from "../../images/benefitsImage.png";

function Membership() {
    return (
        <>
            <Header />
            <MembershipHeader />
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-image-membership">
                        <img src={heroMembership} alt="Hero Membership Image" />
                    </div>
                    <div className="hero-text">
                        <p>Anyone passionate about toxicology are welcome</p>
                        <p>Our meetings are on Mondays 8–9 PM</p>
                        <p>Simply fill out the interest form below</p>
                        <button className="interest-button">
                            Interest Form
                        </button>
                    </div>
                </div>
            </section>
            <section className="benefits-section">
                <div className="benefits-text">
                    <h1 className="membership-coloring">Membership Benefits</h1>
                    <ul>
                        <li>
                            Mentorship and networking opportunities and events
                        </li>
                        <li>
                            Membership with Society of Toxicology and the
                            Northern California Chapter of the Society of
                            Toxicology
                        </li>
                        <li>Workshops and Journal Club experience</li>
                        <li>
                            Access to research opportunity and scholarship
                            database
                        </li>
                        <li>
                            Socials with a community and support network of
                            students with similar passions and interests
                        </li>
                        <li className="membership-coloring">And many more!</li>
                    </ul>
                </div>
                <div className="benefits-image">
                    <div className="benefits-image-container">
                        <img src={benefitsImage} alt="membership_image" />
                    </div>
                </div>
            </section>
            <section className="calendar-section">
                <h1 className="membership-coloring">Events</h1>
                <div className="calendar">
                    {/* IMPORT THE REACT CALENDAR PACKAGE HERE */}
                </div>
            </section>
        </>
    );
}

export default Membership;
