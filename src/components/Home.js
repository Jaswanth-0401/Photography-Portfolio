import React from 'react'
import './Home.css'
import video from '../Assets/video.webm';

const Home = () => {
  return (
    <div className="app">
      <div className="video-container">
        <video autoPlay muted loop className="video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content-container">
          <div className="left-half">
            <p>Capturing Moments <br></br>
              That Last a Lifetime</p>
          </div>
          <div className="right-half">
            <div className="right-content">
            <p>Welcome to my photography portfolio, where I showcase my best <br></br>
            work and capture the essence of special moments.</p>
            </div>
            <div className='buttons-home'>  
                <button className="view-button">View</button>
                <button className="learn-button">Learn more</button>           
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
