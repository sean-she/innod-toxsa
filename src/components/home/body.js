import React from "react";
import body from "./body.css";
import value_career from "../../images/value_career.png";
import value_science from "../../images/value_science.png";
import value_community from "../../images/value_community.png";

import AboutBlurp from "./AboutBlurp";

export default function Body() {
    return (
        <div>
            <AboutBlurp></AboutBlurp>
            <section className="values-section">
                <h2 id="values_title">Our Values</h2>
                <div id="values_underline"></div>
                <div className="values-container">
                    <div className="values-block">
                        <div className="values-img-container">
                            <img src={value_career} alt_text="Career Prep" />
                        </div>
                        <h3>Career Prep</h3>
                        <p>
                            Our career services assist students with guest
                            speaker sessions, mentorship, resume and interview
                            workshops
                        </p>
                    </div>
                    <div className="values-block">
                        <div className="values-img-container">
                            <img
                                src={value_science}
                                alt_text="Scientific Exploration"
                            />
                        </div>
                        <h3>Scientific Exploration</h3>
                        <p>
                            Members will have the opportunity to attend research
                            conferences and gain experience in toxicology
                            through projects and external collaborations.
                        </p>
                    </div>
                    <div className="values-block">
                        <div className="values-img-container">
                            <img src={value_community} alt_text="Community" />
                        </div>
                        <h3>Community</h3>
                        <p>
                            We aim to foster an inclusive community where
                            students can explore toxicology, experience personal
                            growth, and benefit from networking resources
                        </p>
                    </div>
                </div>
            </section>
            <section className="join-section">
                <div className="join-container">
                    <div className="join-text">
                        <h1>Join The Community</h1>
                        <p>
                            Check out our membership details and simply fill out
                            an interest form
                        </p>
                    </div>
                    <button type="button">Become a member</button>
                </div>
            </section>
        </div>
    );
}
