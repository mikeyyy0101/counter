import React from 'react';

const Reset = ({ reset }) => {
  return (
    <button
      className='p-2 bg-gray-500 text-white rounded-lg'
      onClick={reset}
    >
      Reset
    </button>
  );
};

export default Reset;
