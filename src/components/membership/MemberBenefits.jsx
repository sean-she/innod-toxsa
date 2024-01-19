import benefitsImage from "../../images/benefitsImage.png";

export default function MemberBenefits() {
    return (
        <section id="memberbenefits" className="container">
            <div id="benefits-container" className="content-container">
                <div className="benefits-text">
                    <h1>Membership Benefits</h1>
                    <ul>
                        <li>
                            Mentorship and networking opportunities and events
                        </li>
                        <li>
                            Membership with Society of Toxicology and the
                            Northern California Chapter of the Society of
                            Toxicology
                        </li>
                        <li>Workshops and Journal Club experience</li>
                        <li>
                            Access to research opportunity and scholarship
                            database
                        </li>
                        <li>
                            Socials with a community and support network of
                            students with similar passions and interests
                        </li>
                        <li className="membership-coloring">And many more!</li>
                    </ul>
                </div>
                <img src={benefitsImage} alt="membership_image" />
            </div>
        </section>
    );
}
