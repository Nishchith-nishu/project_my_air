import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import TextFields from './components/TextFields';

const App = () => {
  const [textData, setTextData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileUpload = async (file) => {
    // Check for valid file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file.');
      return;
    }

    setLoading(true);
    setError(null); // Clear any previous error
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/upload`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Failed to upload file');
      
      const result = await response.json();
      setTextData(result);  // Automatically populate text fields with extracted data
    } catch (error) {
      setError('Failed to process the file. Please try again.');
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={appContainerStyle}>
      <h1 style={headerStyle}>Visiting Card OCR Upload</h1>
      
      <ImageUpload onFileUpload={handleFileUpload} />
      
      {loading ? (
        <div style={loadingContainerStyle}>
          <div style={spinnerStyle}></div>
          <p style={loadingTextStyle}>Processing image, please wait...</p>
        </div>
      ) : (
        <>
          {error ? (
            <div style={errorMessageStyle}>{error}</div>
          ) : (
            <TextFields data={textData} />  
          )}
        </>
      )}
    </div>
  );
};

const appContainerStyle = {
  width: '600px',
  margin: '0 auto',
  padding: '20px',
  textAlign: 'center',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
};

const headerStyle = {
  color: '#333',
  marginBottom: '20px',
};

const loadingContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const loadingTextStyle = {
  color: '#4A90E2',
  fontWeight: 'bold',
  marginTop: '10px',
};

const spinnerStyle = {
  border: '4px solid rgba(0, 0, 0, 0.1)',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  borderLeftColor: '#09f',
  animation: 'spin 1s ease infinite',
};

const errorMessageStyle = {
  color: 'red',
  fontWeight: 'bold',
  marginTop: '10px',
};


const spinnerKeyframes = `
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;


const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = spinnerKeyframes;
document.head.appendChild(styleSheet);

export default App;
