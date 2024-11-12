// src/Home.js
import React, { useState } from 'react';
import './Home.css';
import ImageDrop from './ImageDrop';
import RunButton from './RunButton';
import Confetti from 'react-confetti';

function Home() {
  const [animalResult, setAnimalResult] = useState(''); // State for output
  const [showConfetti, setShowConfetti] = useState(false); // State for confetti
  const [showBall, setShowBall] = useState(true); // State for ball visibility

  // Function to handle the "Run" button click
  const handleRun = () => {
    const animalTypes = ["Tiger", "Elephant", "Lion", "Giraffe", "Zebra", "Panda", "Kangaroo"];
    const randomAnimal = animalTypes[Math.floor(Math.random() * animalTypes.length)];
    setAnimalResult(`Detected animal: ${randomAnimal}`);

    // Show confetti for 3 seconds when detection happens
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
    setShowBall(false); // Hide ball after running detection
  };

  return (
    <div className="home-page">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />} {/* Confetti animation */}
      <h1 className="main-heading">Welcome to Animal.ai</h1>
      <p>Upload an image to detect animals using our AI technology!</p>

      <ImageDrop />
      <RunButton onClick={handleRun} />

      {animalResult && (
        <div className="output-box">
          <p>{animalResult}</p>
        </div>
      )}

      {/* Bouncing Ball */}
      {showBall && <div className="bouncing-ball"></div>}
    </div>
  );
}

export default Home;