import memberimage from "../../images/toxsaMemberImage.png";

export default function AboutBlurp() {
    return (
        <section className="highlight-container">
            <div className="content-container">
                <img src={memberimage} alt="picture of toxsa members" />
                <div className="highlight-text-container">
                    <p>
                        We unite students who are interested in toxicology,
                        pharmacology, environmental health and related fields by
                        providing mentorship, career preparation, networking,
                        and community service opportunities.
                    </p>
                    <button>Learn more</button>
                </div>
            </div>
        </section>
    );
}
