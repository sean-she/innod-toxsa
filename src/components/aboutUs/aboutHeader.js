import React from 'react';
import './aboutHeader.css'; // Import the CSS file
import aboutHeader from '../../images/about-header.png'; // Replace 'path_to_your_image.jpg' with the actual path to your image


function aboutHeader() {
   return (
       <section className='about-header'>
           <div className="about-header-img">
               <img src={aboutHeader}/>
           </div>
           <div className='headerText'>
               <h1>ToxSA unites students who are interested in toxicology, pharmacology, environmental health
                       and related fields by providing mentorship, career preparation, networking, and community
                       service opportunities.</h1>
           </div>
       </section>
   );
}


export default aboutHeader();