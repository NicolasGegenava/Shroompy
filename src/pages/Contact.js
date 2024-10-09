import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className='contactwrap'><h1 className='developers'>Developers</h1>
    <div className="contact-container">
      <div className="person-card">
        <img src={require("../images/Nico.jpg")} alt="Nico" className="person-image" />
        <h2 className="person-name">Nico Molecule<img src={require("../images/Verified.png")} /></h2>
        <p className="person-description">Machine Learning, API</p>
        <div className='social-icons'>
            <a href="https://github.com/NikoMolecule" className="icon" target='_blank' rel="noreferrer"><img src={require('../images/Github.png')} alt="Github" /></a>
            <a href="https://x.com/NicolasGegenava" className="icon" target='_blank' rel="noreferrer"><img src={require('../images/X.png')} alt="X" /></a>
        </div>
      </div>
      <div className="person-card">
        <img src={require("../images/Nika.png")} alt="Nicolas" className="person-image" />
        <h2 className="person-name">Nicolas Gegenava<img src={require("../images/Verified.png")} /></h2>
        <p className="person-description">Machine Learning, Web Development</p>
        <div className='social-icons'>
            <a href="https://github.com/NicolasGegenava" className="icon" target='_blank' rel="noreferrer"><img src={require('../images/Github.png')} alt="Github" /></a>
            <a href="https://x.com/NicolasGegenava" className="icon" target='_blank' rel="noreferrer"><img src={require('../images/X.png')} alt="X" /></a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;