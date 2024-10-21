

import React from 'react';

const TextFields = ({ data }) => {
  return (
    <div style={formContainerStyle}>
      <h2>Extracted Information</h2>

      <div style={fieldContainerStyle}>
        <label style={labelStyle}>Name:</label>
        <input type="text" value={data.name || ''} style={inputStyle} readOnly />
      </div>

      <div style={fieldContainerStyle}>
        <label style={labelStyle}>Job Title:</label>
        <input type="text" value={data.jobTitle || ''} style={inputStyle} readOnly />
      </div>

      <div style={fieldContainerStyle}>
        <label style={labelStyle}>Company Name:</label>
        <input type="text" value={data.companyName || ''} style={inputStyle} readOnly />
      </div>

      <div style={fieldContainerStyle}>
        <label style={labelStyle}>Email:</label>
        <input type="email" value={data.email || ''} style={inputStyle} readOnly />
      </div>

      <div style={fieldContainerStyle}>
        <label style={labelStyle}>Phone Number:</label>
        <input type="text" value={data.phoneNumber || ''} style={inputStyle} readOnly />
      </div>

      <div style={fieldContainerStyle}>
        <label style={labelStyle}>Address:</label>
        <textarea value={data.address || ''} style={textareaStyle} readOnly></textarea>
      </div>
    </div>
  );
};
const formContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '20px',
  textAlign: 'left',
};

const fieldContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '8px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  width: '100%',
};

const textareaStyle = {
  padding: '8px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  width: '100%',
  height: '100px',
};

export default TextFields;
