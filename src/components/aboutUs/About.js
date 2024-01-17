import Officers from "./officers";
import AboutHeader from "./aboutHeader";
import AboutBody from "./aboutBody";
import aboutus from "../../images/aboutus-hero.png";

function About() {
    return (
        <>
            <AboutHeader />
            <img id="about-header-img" src={aboutus} />
            <AboutBody />
            <Officers />
        </>
    );
}

export default About;
