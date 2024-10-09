import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/home.css'
import Mushroom from '../images/Mushroom.png'
import Map from '../images/Map.png'

const Home = () => {
    return(
      <div>
        <div className="main-section">
            <div className="content1">
                <h2 className="subtitle">Observe Mushroom</h2>
                <br/>
                <h1 className="title">Upload a picture of the mushroom and AI will identify</h1>
                <p className="description">
                    Our model will identify the mushroom and provide information about that species
                </p>
                <NavLink to="/shroompy" className="learn-more">IDENTIFY MUSHROOM</NavLink>
                
          </div>
      <div className="image-container">
        <img src={Mushroom} alt="Mushroom" className="mushroomimage" />
      </div>
    </div>
    <div className="main-section1">
      <div className="image-container1">
        <img src={Map} alt="Map" className="map-image" />
      </div>
      <div className="text-container">
        <h3 className="subtitle">Locate Habitats</h3>
        <h1 className="title">
          Browse the map and <br/>find the nearest<br/> mushroom habitat
        </h1>
        <p className="description">
          Our map is based on information from past explorers and AI predictions. Results may not be accurate.
        </p>
        <p className="learn-more">COMING SOON</p>
      </div>
    </div>
    </div>
    )
}

export default Home