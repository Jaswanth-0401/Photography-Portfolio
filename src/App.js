import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navigation />
      
      <div className='container'>  
          <Route path='/' element={<Home />} />
          <Route path='/' element={<About />} />
          <Route path='/' element={<Gallery />} />
          <Route path='/' element={<Projects />} />
          <Route path='/' element={<Contact />} />
          <Route path='/' element={<Footer />} />
        
      </div>
    </>  
  );
};

export default App;
