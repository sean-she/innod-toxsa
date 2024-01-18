import Officers from "./officers";
import AboutHeader from "./aboutHeader";
import AboutBody from "./aboutBody";
import Footer from "../footer/footer";
import aboutus from "../../images/aboutus-hero.png";

function About() {
    return (
        <>
            <AboutHeader />
            <img id="about-header-img" src={aboutus} />
            <AboutBody />
            <Officers />
            <Footer></Footer>
        </>
    );
}

export default About;
