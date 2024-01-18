import React from "react";

import "./footer.css";
import logo from "../../images/toxsa_logo.png";

export default function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-left-container">
                    <img src={logo}></img>
                    <div className="footer-ocf-container">
                        <a id="ocflink" href="https://www.ocf.berkeley.edu">
                            <img
                                src="http://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
                                alt="Hosted by the OCF"
                            />
                        </a>
                        <p>
                            We are a student group acting independently of the
                            University of California. We take full
                            responsibility for our organization and this web
                            site.
                        </p>
                    </div>
                    <p>© 2023 Toxicology Student Association</p>
                </div>
                <div className="footer-right-container">
                    <div className="footer-nav-container">
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                        <a href="https://padlet.com/natalieoh2/toxsa-database-fkzjzhy5hrek34kv">
                            Opportunities
                        </a>
                        <a href="/join">Become a Member</a>
                    </div>
                    <div className="footer-nav-container">
                        <a href="">Instagram</a>
                        <a href="mailto:berkeleytoxsa@gmail.com">
                            berkeleytoxsa@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
