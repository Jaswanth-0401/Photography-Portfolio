import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../components/Gallery.css';
import Gallery1 from '../Assets/Gallery1.jpg';
import Gallery2 from '../Assets/Gallery2.jpg';
import Gallery6 from '../Assets/Gallery6.jpeg';
import Gallery4 from '../Assets/Gallery4.jpg';
import Gallery5 from '../Assets/Gallery5.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="gallery-title">My Gallery</h1>
      <p className="tagline">Explore the beauty captured through my lens</p>
      <div className="photos">
        <div className="column">
          <img src={Gallery5} className="big-photo1" alt="Gallery5" />
        </div>
        <div className="column">
          <img src={Gallery1} className="small-photo1" alt="Gallery1" />
          <img src={Gallery2} className="small-photo2" alt="Gallery2" />
        </div>
        <div className="column">
          <img src={Gallery4} className="big-photo2" alt="Gallery4" />
        </div>
        <div className="column">
          <img src={Gallery6} className="big-photo2" alt="Gallery6" />
        </div>
      </div>
      <div className='btn'>
          <button>View more</button>
      </div>
    </div>
  );
};

export default Gallery;
