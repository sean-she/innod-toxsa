import React from "react";

import "./officers.css";

import Officer from "./Officer";

import NatalieOh from "../../images/NatalieOh.png";
import DanhTranh from "../../images/DanhTranh.png";
import JessPatrick from "../../images/JessPatrick.png";
import VincentLee from "../../images/VincentLee.png";
import AriGoldberg from "../../images/AriGoldberg.png";
//import memberPres from "../../images/memberimage.png";

export default function Officers() {
    return (
        <div id="officers" className="container">
            <div id="values-content" className="content-container">
                <div className="title-container">
                    <h1>Our Officers</h1>
                </div>
                <div className="officer-column-container">
                    <div className="officer-row-container">
                        <Officer
                            image={NatalieOh}
                            name="Natalie Oh"
                            position="President"
                            major={{
                                one: "Molecular and Cell Biology",
                                two: "Nutritional Sciences and Toxicology",
                            }}
                        ></Officer>
                        <Officer
                            image={DanhTranh}
                            name="Danh Tranh"
                            position="Vice President"
                            major={{
                                one: "Molecular and Cell Biology",
                                two: "Data Science",
                            }}
                        ></Officer>
                        <Officer
                            image={JessPatrick}
                            name="Jess Patrick"
                            position="Secretary"
                            major={{
                                one: "Molecular and Cell Biology",
                                two: "Cognitive Science",
                            }}
                        ></Officer>
                    </div>
                    <div className="officer-row-container">
                        <Officer
                            image={VincentLee}
                            name="Vincent Lee"
                            position="Social Media and Outreach"
                            major={{
                                one: "Molecular and Cell Biology",
                                two: "",
                            }}
                        ></Officer>
                        <Officer
                            image={AriGoldberg}
                            name="Ari Goldberg"
                            position="Social Chair"
                            major={{
                                one: "Music",
                                two: "Nutritional Sciences and Toxicology",
                            }}
                        ></Officer>
                    </div>
                </div>
            </div>
        </div>
    );
}
