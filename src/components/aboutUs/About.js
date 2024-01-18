import Officers from "./officers";
import aboutus from "../../images/aboutus-hero.png";

import Hero from "./Hero";
import MemberBenefits from "./MemberBenefits";
import Footer from "../footer/footer";

function About() {
    return (
        <>
            <Hero />
            <img id="about-header-img" src={aboutus} />
            <MemberBenefits></MemberBenefits>
            <Officers />
            <Footer></Footer>
        </>
    );
}

export default About;
