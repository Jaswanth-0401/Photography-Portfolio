import React, { useState } from 'react'
import '../components/Contact.css'
import ContactImage from '../Assets/Contact.jpg'

const Contact = () => {

  return (
    <div className='contact-container'>
      <center><h1 className='contact-title'>Ping Me!</h1></center>
      <div className='contact-content'>
        <div className='left-half'>
            <img src={ContactImage} alt='Contact_image'/>
        </div>
        <div className='right-half'>
          <h2 className='contact-tagline'>Let me work for you</h2>
          <p className='contact-phrase'>Professional photography services to make your memories last a lifetime.</p>
          <div className='contact-cta'>
            <button className='cont-book'>Book</button>
            <button className='cont-contact'>Contact</button>
          </div>  
        </div>
      </div>  
    </div>
  )
}

export default Contact
