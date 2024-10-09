import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/prediction.css';

const Prediction = () => {
  const { state } = useLocation();
  const { prediction, wikipediaLink } = state || { prediction: '', wikipediaLink: '' };

  return (
    <div className="wrap">
      <p className='prediction'>{prediction.toUpperCase()}</p>
      {wikipediaLink && (
        <div className='wikiembed'>
          <iframe
            src={wikipediaLink}
            width="100%"
            height="100%"
            title="Wikipedia Page"
            style={{ border: 'none' }}
          />
        </div>
      )}
      <a href='/shroompy' className='linkidentificator'>Back to the Identificator</a>
    </div>
  );
};

export default Prediction;
