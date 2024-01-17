import memberimage from "../../images/about-blurp-image.png";

export default function AboutBlurp() {
    return (
        <section id="about-blurp" className="container">
            <div className="content-container">
                <img src={memberimage} alt="picture of toxsa members" />
                <div className="highlight-text-container">
                    <p>
                        We unite students who are interested in toxicology,
                        pharmacology, environmental health and related fields by
                        providing mentorship, career preparation, networking,
                        and community service opportunities.
                    </p>
                    <a className="button" href="/about">
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}
