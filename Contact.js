// src/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [showCollaborators, setShowCollaborators] = useState(false);

  const collaborators = [
    { name: 'Dominique McDonald', role: 'Backend Developer', image: 'https://i.imgur.com/wnUAsy4.jpeg' },
    { name: 'Kathiana Rodriguez', role: 'Backend Developer', image: 'https://i.imgur.com/hhfy1Gf.jpeg' },
    { name: 'Joice Mikhael', role: 'Frontend Developer', image: 'https://i.imgur.com/Ag9eRXt.png' },
    { name: 'Mark Pelico', role: 'Frontend Developer', image: 'https://i.imgur.com/OwzBxj5.jpg' }
  ];

  const handleButtonClick = () => {
    setShowCollaborators(!showCollaborators);
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <button onClick={handleButtonClick} className="contact-button">
        {showCollaborators ? 'Hide Collaborators' : 'Show Collaborators'}
      </button>
    <div className="contact-page-collaborators">
      {showCollaborators && (
        <div className="collaborators-list">
          {collaborators.map((collaborator, index) => (
            <div key={index} className="collaborator">
              {collaborator.image && (
                <img 
                  src={collaborator.image} 
                  alt={`${collaborator.name}'s profile`} 
                  className="profile-pic"
                />
              )}
              <h3>{collaborator.name}</h3>
              <p>{collaborator.role}</p>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default Contact;