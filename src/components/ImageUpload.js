
import React from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUpload = ({ onFileUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      onFileUpload(acceptedFiles[0]);
    }
  });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #ddd', padding: '20px', cursor: 'pointer', textAlign: 'center' }}>
      <input {...getInputProps()} />
      Drag & drop an image here, or click to select one
    </div>
  );
};

export default ImageUpload;
