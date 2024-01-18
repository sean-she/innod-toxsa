import "./body.css";

import careerimage from "../../images/value_career.png";
import exploreimage from "../../images/value_science.png";
import communityimage from "../../images/value_community.png";

export default function Values() {
    function Value({ image, title, desc }) {
        return (
            <div className="value-container">
                <img src={image}></img>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        );
    }

    return (
        <section id="values" className="container">
            <div id="values-content" className="content-container">
                <div className="title-container">
                    <h1>Our Values</h1>
                    <div className="underline"></div>
                </div>
                <div className="values-container">
                    <Value
                        image={careerimage}
                        title="Career Prep"
                        desc="Our career services assist students with guest speaker sessions, mentorship, resume and interview workshops"
                    ></Value>
                    <Value
                        image={exploreimage}
                        title="Scientific Exploration"
                        desc="Members will have the opportunity to attend research conferences and gain experience in toxicology through projects and external collaborations"
                    ></Value>
                    <Value
                        image={communityimage}
                        title="Community"
                        desc="We aim to foster an inclusive community where students can explore toxicology, experience personal growth, and benefit from networking resources"
                    ></Value>
                </div>
            </div>
        </section>
    );
}
