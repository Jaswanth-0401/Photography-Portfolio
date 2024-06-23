import React from 'react'
import '../components/Footer.css'
import Instagram from '../Assets/instagram.png'
import Facebook from '../Assets/facebook.png'
import Twitter from '../Assets/twitter.png'
import LinkedIn from '../Assets/linkedin.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-upper'>  
        <div className='footer-logo'>
            <p className='footer-logo'>.jdp</p>
        </div>
        <div className='services'>
            <p>Photography</p>
            <p>Gear Setup</p>
            <p>Studio setup</p>
            <p>Art direction</p>
        </div>  
      </div>
      <hr></hr>
      <div className='footer-down'>
        <div className='copyrights'>
            <p><b>© Jaswanth 2023.</b></p>
        </div>
        <div className='social-media'>
            <a href='https://www.instagram.com/your_instagram_username/' target='_blank' rel='noopener noreferrer'>
                <img src={Instagram} alt='instagram'/>
            </a>
            <a href='https://www.facebook.com/your_facebook_username/' target='_blank' rel='noopener noreferrer'>
                <img src={Facebook} alt='facebook'/>
            </a>
            <a href='https://twitter.com/your_twitter_username/' target='_blank' rel='noopener noreferrer'>
                <img src={Twitter} alt='twitter'/>
            </a>
            <a href='https://www.linkedin.com/in/your_linkedin_username/' target='_blank' rel='noopener noreferrer'>
                <img src={LinkedIn} alt='linkedin'/>
            </a>
        </div>
      </div> 
    </div>
  )
}

export default Footer
