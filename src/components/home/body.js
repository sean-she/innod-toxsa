import React from 'react'
import body from './body.css'
import member_image from "../../images/toxsaMemberImage.png"

export default function Body() {
  return (
    <div className>
      <section className="body-container">
        <div className="image-container">
          <img src={member_image} alt="toxsa logo"/>
        </div>
        <div className="content-container">
          <p>
            {"We unite students who are interested in toxicology, pharmacology, environmental health and related fields by providing mentorship, career preparation, networking, and community service opportunities."}
          </p>
          <button>
            {"Learn More"}
          </button>
        </div>
      </section>
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-container">
          <div className="values-block">
              <div className="values-img-container">
                <img src="" alt_text="value.png" />
              </div>
              <h3>Career Prep</h3>
              <p>
                Our career services assist students with guest speaker sessions, mentorship, resume and interview workshops
              </p>
          </div>
          <div className="values-block">
              <div className="values-img-container">
                <img src="" alt_text="value.png" />
              </div>
              <h3>Scientific Exploration</h3>
              <p>
                Members will have opportunities to join toxicology projects and work on real-life collaborations with toxicology industries
              </p>
          </div>
          <div className="values-block">
              <div className="values-img-container">
                <img src="" alt_text="value.png" />
              </div>
              <h3>Community</h3>
              <p>
                We aim to foster an inclusive community where students can explore toxicology, experience personal growth, and benefit from networking resources
              </p>
          </div>
        </div>
      </section>
    </div>
  );
}
