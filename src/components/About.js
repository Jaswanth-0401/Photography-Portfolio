import React from 'react';
import '../components/About.css'; 
import About_img from '../Assets/About.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={About_img} alt="About Us" />
        </div>
        <div className="about-text">
          <p className='about-name'>John Doe</p>
            <p className='about-description'>
                Hello there! I'm John Doe, and I'm delighted to have you here. Through my lens,<br></br> I aim to freeze moments in time, encapsulating emotions and stories that resonate <br></br>with authenticity. Join me as we embark on a visual journey, where every frame  <br></br>tells a unique tale.Let's capture memories together.
            </p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
