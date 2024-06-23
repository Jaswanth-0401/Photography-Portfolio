import React from 'react'
import '../components/Projects.css'
import Project1 from '../Assets/Projects1.jpg';
import Project2 from '../Assets/Projects2.jpg';
import Project3 from '../Assets/Projects3.jpeg';


const Projects = () => {
  return (
    <div className="project-container">
      <h1 className='project-title'>Projects</h1>
      <div className="project-content-1">
        <div className="project-image-left">
          <img src={Project1}/>
        </div>
        <div className="project-text">
          <p className='project-name'>Product Photography</p>
            <p className='project-description'>
                                        Elevate your brand with stunning product imagery that captivates your audience.<br></br>
                                        Our meticulous attention to detail ensures that every item is showcased in its best <br></br>
                                        light, highlighting its unique features and craftsmanship. From sleek gadgets to luxurious <br></br>
                                        accessories, we specialize in creating compelling visuals that drive engagement and boost sales.
            </p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>

      <div className="project-content-2">
        
        <div className="project-text">
          <p className='project-name'>Wedding Photography</p>
            <p className='project-description'>
                                        Celebrate your love story with timeless images that capture the essence of your special day.<br></br> 
                                        With a blend of candid moments and carefully curated shots, we craft a narrative that reflects the <br></br>
                                        emotions, joy, and beauty of your wedding day. From intimate ceremonies to grand celebrations, <br></br>
                                        we're dedicated to preserving precious memories that you'll cherish for a lifetime.
            </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="project-image-right">
          <img src={Project2} />
        </div>
      </div>

      <div className="project-content-3">
        <div className="project-image-left">
          <img src={Project3}/>
        </div>
        <div className="project-text">
          <p className='project-name'> Photography</p>
            <p className='project-description'>
                                        Unlock your creativity and bring your vision to life with our versatile studio photography services.<br></br> 
                                        Whether you're a fashion designer, artist, or entrepreneur, our state-of-the-art studio provides the<br></br> 
                                        perfect canvas for your projects. From professional headshots to creative editorial spreads, we collaborate<br></br>  
                                        closely with you to capture your vision with precision and style.
            </p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
      <div className='project-view-button'>
        <button className='view-button'>View more</button>
      </div>
    </div>
  )
}

export default Projects