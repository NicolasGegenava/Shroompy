import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/identificator.css';

const Identificator = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const history = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setMessage(`Selected file: ${uploadedFile.name}`);
    }
    setIsDragging(false);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(process.env.REACT_APP_SECRET_API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-api-key': process.env.REACT_APP_SECRET_API_KEY,
        },
      });
      setMessage('Image uploaded successfully');
      const prediction = `Prediction: ${response.data.prediction}`;
      const formattedTitle = response.data.prediction.replace(/\s+/g, '_');
      const wikipediaLink = `https://en.wikipedia.org/wiki/${formattedTitle}`;

      history('/prediction', {
        state: { prediction, wikipediaLink },
      });
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setMessage(error.response.data.error);
      } else {
        setMessage(`Upload failed: ${error.response ? error.response.data : 'Server error'}`);
        console.log(process.env.REACT_APP_SECRET_API_KEY)
      }
    }
  };

  return (
    <div className='wrap1'>
      <div
        className={`upload-container ${isDragging ? 'dragging' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileInput"
          className="file-input"
          onChange={handleFileChange}
          accept="image/*"
        />
        <label htmlFor="fileInput" className="file-label">
          {file ? (
            <p className="file-name">{file.name}</p>
          ) : (
            <>
              <div className="upload-icon"><img className='upload-image' src={require('../images/File.png')} alt="Upload icon" /></div>
              <p className='dragndrop'>Drag & drop your image file here, or click to browse</p>
            </>
          )}
        </label>
      </div>
      <div>
        <button className='uploadbutton' onClick={handleUpload}>UPLOAD AND PREDICT</button>
        <p className='error'>{message}</p>
      </div>
    </div>
  );
};

export default Identificator;
