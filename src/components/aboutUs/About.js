import Officers from "./officers";
import aboutus from "../../images/aboutus-hero.png";

import Hero from "./Hero";
import ClubDesc from "./ClubDesc";
import Footer from "../footer/footer";

function About() {
    return (
        <>
            <Hero />
            <img id="about-header-img" src={aboutus} />
            <ClubDesc></ClubDesc>
            <Officers />
            <Footer></Footer>
        </>
    );
}

export default About;
