// Button.js
import React from 'react';

const Button = ({ label, onClick, customStyles }) => {
  return (
    <button
      className={` flex px-4 py-2 w-fit bg-purple-500 text-white text-sm rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 ${customStyles}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
