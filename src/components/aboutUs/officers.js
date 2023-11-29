import React from 'react';
import './officers.css';
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
    <div className="officer-container">

      {/* Top row of value blocks */}
      <div className="officer-row">
        <div className="officer-block">
          <div className="officer-img-container">
            <img src={NatalieOh} alt="Natalie Oh" />
          </div>
          <h3>Natalie Oh</h3>
          <p>
            President
          </p>
          <p>
            MCB & Nutritional Sciences and Toxicology
          </p>
        </div>
        <div className="officer-block">
          <div className="officer-img-container">
            <img src={NatalieOh} alt="Natalie Oh" />
          </div>
          <h3>Danh Tranh</h3>
          <p>
          Vice President
          </p>
          <p>
          Data Science & MCB          
          </p>
        </div>
        <div className="officer-block">
          <div className="officer-img-container">
            <img src={NatalieOh} alt="Natalie Oh" />
          </div>
          <h3>Jess Patrick</h3>
          <p>
          Secretary
          </p>
          <p>
          MCB & Cognitive Science
          </p>
        </div>
        <div className="officer-block">
          <div className="officer-img-container">
            <img src={NatalieOh} alt="Natalie Oh" />
          </div>
          <h3>Jess Patrick</h3>
          <p>
          Secretary
          </p>
          <p>
          MCB & Cognitive Science
          </p>
        </div>
        <div className="officer-block">
          <div className="officer-img-container">
            <img src={NatalieOh} alt="Natalie Oh" />
          </div>
          <h3>Jess Patrick</h3>
          <p>
          Secretary
          </p>
          <p>
          MCB & Cognitive Science
          </p>
        </div>
        <div className="officer-block">
          <div className="officer-img-container">
            <img src={NatalieOh} alt="Natalie Oh" />
          </div>
          <h3>Jess Patrick</h3>
          <p>
          Secretary
          </p>
          <p>
          MCB & Cognitive Science
          </p>
        </div>
      </div>  
    </div>
  </>

  );
}
