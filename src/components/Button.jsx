import React from 'react';

const Button = ({ handleClick }) => {
  return (
    <button
      className='p-2 bg-emerald-500 text-white rounded-lg'
      onClick={handleClick}
    >
      Increment
    </button>
  );
};

export default Button;
