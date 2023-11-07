import React from 'react';
import "./footer.css";
import logo from "../../images/toxsa_logo.png"

export default function Footer(props) {

    return (
        <div className="footer-container">
            <div className="logo-container">
                <img src={logo} alt="toxsa logo"/>

                <div className="logo-midsection">
                    <div className="ocf">
                        <a href="https://www.ocf.berkeley.edu">
                            <img src="http://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
                            alt="Hosted by the OCF"/>
                        </a>
                    </div>
                    <div className="description">
                        <p>We are a student group acting independently of the University of California. We take full responsibility for our organization and this web site.</p>
                    </div>
                </div>
                <p>© 2023 Toxicology Student Association</p>
            </div>
            <div className="footer-navigation">
                <div className="footer-pages">
                    <a href="#Home"><p>Home</p></a>
                    <a href="#About-Us"><p>About Us</p></a>
                    <a href="#Opportunities"><p>Opportunities</p></a>
                    <a href="#Membership"><p>Become a Member</p></a>
                </div>
                <div className="footer-contact">
                    <p>CONTACT US</p>
                    <a href="#Instagram"><p>Instagram</p></a>
                    <a href="mailto:berkeleytoxsa@gmail.com"><p>berkeleytoxsa@gmail.com</p></a>
                </div>
            </div>
        </div>
    );
}
