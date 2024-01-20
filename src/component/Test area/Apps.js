// App.js
import React, { useState } from 'react';
import Popup from './Popup';
import './Popup.css';

function Apps() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <h1>My App</h1>
      <button onClick={openPopup}>Open Popup</button>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <h2>This is the Popup</h2>
        <p>Popup content goes here.</p>
      </Popup>
    </div>
  );
}

export default Apps;
