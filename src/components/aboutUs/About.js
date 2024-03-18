import { Helmet } from "react-helmet";

import Officers from "./officers";
import aboutus from "../../images/aboutus-hero.png";

import Hero from "./Hero";
import ClubDesc from "./ClubDesc";
import Footer from "../footer/footer";

function About() {
    return (
        <>
            <Helmet>
                <title>About | UC Berkeley ToxSA</title>
            </Helmet>

            <section className="hero-section">
                <Hero />
                <img id="about-header-img" src={aboutus} alt="aboutus-hero"/>
            </section>
            <ClubDesc></ClubDesc>
            <Officers />
            <Footer></Footer>
        </>
    );
}

export default About;
