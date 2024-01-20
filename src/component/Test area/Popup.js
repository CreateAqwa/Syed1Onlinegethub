import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  else{
    window.print()
  }


  return (
    <div className="popup">
      <div className="popup-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;


