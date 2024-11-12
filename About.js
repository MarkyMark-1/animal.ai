// src/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Display the Image */}
      <img src="/pictureabout.JPG" alt="Wildlife" className="about-image" />

      {/* About Us Text */}
      <div className="about-text">
        <h2>About Animal.ai</h2>
        <p>
          Welcome to <strong>Animal.ai</strong>—an innovative platform created by a team of computer science students driven by a passion for technology and the natural world. Our goal is to bridge the gap between artificial intelligence and wildlife education, providing a tool for anyone to identify and learn about the animal kingdom by simply uploading an image. Powered by advanced machine learning algorithms, Animal.ai recognizes a vast array of animal species and aims to make wildlife discovery accessible to everyone.
        </p>
        <p>
          The idea for Animal.ai originated during our time in university. As computer science students, we often found ourselves immersed in code and complex algorithms, but rarely did we have the chance to explore fields outside of technology, such as wildlife biology. It became apparent to us that there was a lack of accessible, tech-driven resources for students like us, who were curious about the natural world but had limited exposure to it in our academic curriculum. We wanted to change that.
        </p>
        <p>
          At its core, Animal.ai is about fostering curiosity, bridging disciplines, and making knowledge about animals available through the lens of technology. By utilizing image recognition AI, Animal.ai empowers users to upload any animal photo—whether taken on a hike, captured in a zoo, or shared by others online—and gain instant insights into the animal's species, habitat, and characteristics. It’s a learning experience that combines the accuracy of AI with the wonder of wildlife exploration.
        </p>
        <p>
          Our journey to build Animal.ai has been as much a learning experience for us as it is intended to be for our users. As computer science majors, we have applied our skills in machine learning, data science, and user interface design to develop a tool that is not only functional but also engaging. Along the way, we’ve collaborated with wildlife enthusiasts and consulted scientific resources to create an AI model that can accurately identify animals and provide valuable information on each species.
        </p>
        <p>
          The project also reflects our vision for a future where technology enhances our understanding of the world around us. We believe that as AI continues to evolve, it will open doors to new educational experiences and connect people with fields they may not have had the opportunity to explore otherwise. Through Animal.ai, we aim to inspire other students and curious minds to engage with both technology and nature, fostering a respect and appreciation for the rich biodiversity of our planet.
        </p>
        <p>
          Whether you’re a student, a nature lover, or simply curious, we invite you to join us on this journey. With Animal.ai, let’s uncover the secrets of the animal kingdom, one image at a time.
        </p>
      </div>
    </div>
  );
}

export default About;