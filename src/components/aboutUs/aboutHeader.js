import React from 'react';
import './aboutHeader.css'; // Import the CSS file
import  aboutus  from "../../images/aboutus.png";


export default function AboutHeader() {
   return (
    <section className='about-header'>
        <div className="about-header-div">
            <img id="about-header-img" src={aboutus}/>
        </div>
        <div className='headerText'>
            <h1 class='headerh1'>ToxSA unites students who are interested in toxicology, pharmacology, environmental health
                    and related fields by providing mentorship, career preparation, networking, and community
                    service opportunities.</h1>
        </div>
    </section>   
   );
}