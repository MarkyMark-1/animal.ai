// src/ImageDrop.js
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './ImageDrop.css';

function ImageDrop() {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*', // Restrict to image files only
    multiple: false,    // Allow only one image at a time
  });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here...</p>
      ) : (
        <p>Drag and drop an image, or click to select one</p>
      )}
      {selectedImage && <img src={selectedImage} alt="Preview" className="preview" />}
    </div>
  );
}

export default ImageDrop;