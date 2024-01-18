import "./body.css";

import MentorshipImage from "../../images/mentorship.png";
import ProjectsImage from "../../images/projects.png";
import CommunityImage from "../../images/community.png";

export default function ClubDesc() {
    return (
        <div id="clubdesc" className="container">
            <div id="clubdesc-content" className="content-container">
                <div className="clubdesc-text">
                    <h1>Mentorship and Career Preparations</h1>
                    <p>
                        Our career services offer mentoring, speaker events,
                        resume and interview prep, plus access to exclusive
                        scholarships and internships. ToxSA also works closely
                        with the NorCal SOT, opening doors to professional
                        networks and additional academic benefits.
                    </p>
                </div>
                <img src={MentorshipImage}></img>
            </div>
            <div id="clubdesc-content" className="content-container">
                <img src={ProjectsImage}></img>
                <div className="clubdesc-text">
                    <h1>Projects and Community Service</h1>
                    <p>
                        ToxSA has previously championed the Lead Education
                        Awareness Program (LEAP) to spread awareness about
                        household hazards and pollutants, and has collaborated
                        with the NorCal SOT and Lawrence Hall of Science to
                        immerse students in toxicology. Members can engage in
                        projects, co-host events, and share insights in monthly
                        Journal Clubs.
                    </p>
                </div>
            </div>
            <div id="clubdesc-content" className="content-container">
                <div className="clubdesc-text">
                    <h1>Community</h1>
                    <p>
                        Our aim is to foster a nurturing and inclusive community
                        for students interested in toxicology, facilitating both
                        their academic progress and personal development. ToxSA
                        provides study support, resource exchange, and social
                        gatherings, preparing Berkeley students for future
                        careers in toxicology and integrating them into a
                        dynamic toxicologists’ network.
                    </p>
                </div>
                <img src={CommunityImage}></img>
            </div>
        </div>
    );
}
