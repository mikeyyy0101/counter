import React from 'react';

const Button2 = ({ handleClick2 }) => {
  return (
    <button
      className='p-2 bg-red-500 text-white rounded-lg'
      onClick={handleClick2}
    >
      Decrement
    </button>
  );
};

export default Button2;
