import React from 'react';
import '../home/body.css';
import NatalieOh from "../../images/mem1.png";
import VincentLee from "../../images/toxsaMemberImage.png";
import JessPatrick from "../../images/toxsaMemberImage.png";
import DanhTran from "../../images/toxsaMemberImage.png";
import AriGoldberg from "../../images/toxsaMemberImage.png";
//import memberPres from "../../images/memberimage.png";

export default function Officers() {
  return (
  <>
    <h2>Our Officers</h2>
    <div className="values-container">

      {/* Top row of value blocks */}
      <div className="values-row">
        <div className="values-block">
          <div className="values-img-container">
            <img src={NatalieOh} alt="Natalie Oh" />
          </div>
          <h3>Career Prep</h3>
          <p>
            Our career services assist students with guest speaker sessions,
            mentorship, resume, and interview workshops.
          </p>
        </div>
      </div>  

      {/* Bottom row of value blocks */}
      <div className="values-row">
        <div className="values-block">
          <div className="values-img-container">
            <img src={DanhTran} alt="Networking" />
          </div>
          <h3>Networking</h3>
          <p>
            Building professional relationships within the field of toxicology to support future career opportunities.
          </p>
      </div>
      </div>  
    </div>
  </>

  );
}
