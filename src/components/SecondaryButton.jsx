// src/components/SecondaryButton.js
import React from 'react';

const SecondaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-vibrantTeal text-white font-montserrat font-semibold py-2 px-4 rounded transition duration-200 hover:bg-teal-700 "
    >
      {children}
    </button>
  );
};

export default SecondaryButton;