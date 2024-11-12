// src/RunButton.js
import React from 'react';
import './RunButton.css';

function RunButton({ onClick }) {
  return (
    <button className="run-button" onClick={onClick}>
      Run
    </button>
  );
}

export default RunButton;