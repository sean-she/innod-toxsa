import React from 'react'
import './aboutBody.css'
import mentorship_image from "../../images/newCommunityImage.png"
import projects_image from "../../images/newProjectImage.png"
import community_image from "../../images/newMentorshipImage.png"


export default function AboutBody() {
  return (
    <div>

{/*  Mentorship and Career Preparations part */}

      <section className='allContent'>
      <div className='title-and-description'>
            <h3 
              className='mentorship-title'> 
                Mentorship and Career Preparations 
            </h3>
            <p className='mentorship-description'> 
             Our career services offer mentoring, speaker events, resume and interview prep, plus access to exclusive scholarships and internships. ToxSA membership includes affiliation with the NorCal SOT, opening doors to professional networks and additional academic benefits.
            </p>
                
        </div>

    {/* image  */}
      
        <img 
        className='mentorship-image' 
        src={mentorship_image} 
        alt="Toxicology laptop presentation"/>

      
      </section>

      {/* Projects and Community Service part */}
      <section className='projects-content'>
        <img 
          className='projects-image' 
          src={projects_image} 
          alt="Four people giving a presentation"/>
        <div 
        className='projects-title-and-description'> 
          <h3 className='projects-title'> 
            Projects and Community Service 
          </h3>
          <p className='projects-description'>
          ToxSA has previously championed the Lead Education Awareness Program (LEAP) to spread awareness about household hazards and pollutants, and has collaborated with the NorCal SOT and Lawrence Hall of Science to immerse students in toxicology. Members can engage in projects, co-host events, and share insights in monthly Journal Clubs.        </p>
        </div>
      </section>

    {/*  Community  part */}

    <section className='community-content'>
      <div className='community-title-and-description'>
            <h3 
              className='community-title'> 
              Community           
            </h3>
             <p className='community-descrip'> 
             Our aim is to foster a nurturing and inclusive community for students interested in toxicology, facilitating both their academic progress and personal development. ToxSA provides study support, resource exchange, and social gatherings, preparing Berkeley students for future careers in toxicology and integrating them into a dynamic toxicologists’ network.        
             </p>        
        </div>
      

    {/* image  */}
      
        <img 
        className='community-image' 
        src={community_image} 
        alt="Three gir taking a selfie."/>

      
      </section>
    

    </div>
  )
}
