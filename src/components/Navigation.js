import React from 'react';
import { Link } from 'react-scroll';
import '../components/Navigation.css';

const Navigation = () => {
  return (
    <nav className='navbar'>
      <p className='logo'>.jdp</p>
      <div className='nav-links'>
        <Link to='app' spy={true} smooth={true} duration={500} className='navlink-item'>Home</Link>
        <Link to='about-container' spy={true} smooth={true} duration={500} className='navlink-item'>About</Link>
        <Link to='gallery' spy={true} smooth={true} duration={500} className='navlink-item'>Gallery</Link>
        <Link to='project-container' spy={true} smooth={true} duration={500} className='navlink-item'>Projects</Link>
        <Link to='contact-container' spy={true} smooth={true} duration={500} className='navlink-item'>Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;
