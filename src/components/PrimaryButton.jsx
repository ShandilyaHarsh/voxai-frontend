// src/components/PrimaryButton.js
import React from 'react';

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-electricBlue text-white font-montserrat  font-semibold py-2 px-4 rounded-xl transition duration-200 hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;